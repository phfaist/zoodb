//! External links in a new tab (brief 14, P1): the ZooDb lowering rule of
//! `\href`, `\url` and `\email` on the HTML backend.
//!
//! ZooDb 0.2.1 gave every link of FLM content `target="_blank"` (and nothing
//! else) unless its address was local: it starts with `#`, with `/` but not
//! `//`, or with `javascript:` ([`is_local`]). flm-core's HTML backend writes
//! a link (`flm.pres.link`) from a fixed convention that has no such
//! attribute, so this rule stages the tag itself, as a construct node
//! (`flm.pres.html.tag`): an `<a>` with what the backend writes for the link
//! (the link's class, `href` and `data-flm-kind="url"`, its style
//! requirement), then `target="_blank"`.
//!
//! The rule reads the command, the address and the display as flm-core's own
//! rule ([`LinkRule`](flm_core::stdcore::features::href::LinkRule)) does, and
//! recovers from an address that is not characters as it does (the Error
//! `flm.href.address-not-characters`, the display alone). It stages flm-core's
//! own link instead, the `flm.pres.link` that rule stages around the same
//! content, where the new tab does not apply or a construct would be wrong:
//!
//! - a local address;
//! - an address the HTML address policy refuses: a construct node bypasses
//!   the policy, so the rule checks the address itself and leaves the refusal
//!   to the backend, which writes the link without its address and reports
//!   `flm.html.refused-address`;
//! - a link inside another link. HTML does not allow an `<a>` inside an `<a>`,
//!   and the backend writes the inner one of two `flm.pres.link` as a
//!   `<span>`, which it cannot do for a construct node. The rule therefore
//!   stages the standard link when the content it lowered holds anything that
//!   may write a link ([`holds_link`]: a link, an `<a>` tag, or an element the
//!   backend does not write natively, which a later round lowers), and when
//!   the node stands in the text of an element that writes a link around it
//!   ([`inside_link`]: another `\href`, a `\hyperref`, a `\term`).
//!
//! The rule is the default on the `html` backend
//! ([`DefaultMark::OnBackends`]), as flm-core's guide prescribes for a rule
//! that stages a construct element; the text and LaTeX backends keep
//! flm-core's rules, and no plan's lowering selection is changed. The ZooDb
//! feature registers it unless the engine's configuration switches it off
//! (`link_target_blank`).

use std::collections::BTreeSet;
use std::sync::Arc;

use flm_core::core::lowering::{
    DefaultMark, Lower, LowerCx, LowerError, Lowerer, Lowering, LoweringDecl, LoweringRule, chars_at_lowering,
};
use flm_core::core::registry::{BuildError, FeatureBuilder};
use flm_core::lang::Flm;
use flm_core::lang::text::plain_text_of;
use flm_core::model::element::{element_of, element_value};
use flm_core::model::names::{ElementName, Name};
use flm_core::stdcore::backends::html::conventions::row;
use flm_core::stdcore::backends::html::{self, AddressUse, HtmlTagPayload, TAG, check_address, native_elements};
use flm_core::stdcore::backends::lowering::lower_arg_named_or_nothing;
use flm_core::stdcore::backends::pres::{self, ContentInOpaque, LinkPayload, OpaqueContent};
use flm_core::stdcore::features::defterm::TERM;
use flm_core::stdcore::features::href::{
    ADDRESS_ARG, AddressNotCharacters, HrefCommand, LINK_ELEMENT, LINK_KIND, TEXT_ARG, display,
};
use flm_core::stdcore::features::refs::HYPERREF;
use flm_core::techy::core::node::{BuildId, NodeRef};
use flm_core::techy::error::Diagnostic;

/// The name of the rule, `zoodb.href.link.lower.html`.
pub const LINK_RULE: &str = "zoodb.href.link.lower.html";

/// Whether `address` is within the site: an address fragment
/// (`#…`), a path from the site's root (`/…`, not `//…`, which names another
/// host), or a `javascript:` address (which the HTML address policy refuses
/// anyway). Every other address opens in a new tab, relative ones included.
pub fn is_local(address: &str) -> bool {
    address.starts_with('#') || (address.starts_with('/') && !address.starts_with("//")) || address.starts_with("javascript:")
}

/// Registers the rule with the peer declarations it needs: the HTML backend
/// it is the default on, and the two presentation elements it stages. The
/// `href` feature must be on (the rule lowers its element).
pub fn register(b: &mut FeatureBuilder<'_>) -> Result<(), BuildError> {
    b.peer_backend(html::BACKEND, "the html backend, whose links to an address outside the site open in a new tab")?;
    b.peer_element::<HtmlTagPayload>(TAG, "the `<a>` tag of a link that opens in a new tab")?;
    b.peer_element::<LinkPayload>(pres::LINK, "the standard link, where the new tab does not apply")?;
    b.lowering_rule(
        LoweringRule::new(
            LINK_RULE,
            LINK_ELEMENT,
            LoweringDecl::new().produces(pres::LINK).produces(TAG),
            Arc::new(TargetBlankLinkRule { native: native_elements().into_iter().collect() }),
            DefaultMark::OnBackends(vec![html::BACKEND.into()]),
        )
        .docs("on html, a hyperlink to an address outside the site is an `<a>` with `target=\"_blank\"`"),
    )
}

/// The implementation of [`LINK_RULE`]; `native` is the HTML backend's native
/// element set, for [`holds_link`].
struct TargetBlankLinkRule {
    native: BTreeSet<ElementName>,
}

impl Lower for TargetBlankLinkRule {
    fn lower(&self, node: NodeRef<'_, Flm>, cx: &mut LowerCx<'_>, lw: &mut dyn Lowerer) -> Result<Lowering, LowerError> {
        // As flm-core's rule: the command, the address read as characters
        // (else reported, and the display written alone), the display.
        let command =
            element_value::<HrefCommand>(&node).copied().ok_or_else(|| LowerError::structure("a hyperlink node without its command"))?;
        let (address, linked) = match node.argument_content_nodes_named(ADDRESS_ARG) {
            Ok(Some(content)) => match chars_at_lowering(content.iter())? {
                Ok(text) => (text, true),
                Err(_) => {
                    lw.diagnose(Diagnostic::error(AddressNotCharacters { command: command.name().to_string() }, node.span().clone()));
                    (plain_text_of(content.iter()), false)
                }
            },
            _ => (String::new(), true),
        };
        let target = format!("{}{address}", command.prefix());
        let content = if command.has_text() {
            lower_arg_named_or_nothing(cx, lw, &node, TEXT_ARG)?
        } else {
            let shown = display(&target);
            if shown.is_empty() { Vec::new() } else { vec![lw.text(cx, &shown)?] }
        };
        if !linked {
            return Ok(Lowering::Emit(content));
        }
        let new_tab = !is_local(&target)
            && check_address(&target, AddressUse::Link).is_ok()
            && !inside_link(&node)
            && !holds_link(cx, &content, &self.native);
        let payload = LinkPayload { href: target, kind: LINK_KIND.into(), doc_role: None, label: None, shows_target: !command.has_text() };
        match new_tab.then(|| new_tab_tag(&payload)).flatten() {
            Some((tag, style)) => {
                if let Some(style) = style {
                    lw.require(&Name::from(style));
                }
                Ok(Lowering::Emit(vec![lw.pres_with(cx, &ElementName::from(TAG), tag, content)?]))
            }
            None => Ok(Lowering::Emit(vec![lw.pres_with(cx, &ElementName::from(pres::LINK), payload, content)?])),
        }
    }
}

/// The `<a>` tag of `link` that opens in a new tab, with the style definition
/// it requires: the class, `href` and kind attributes the HTML backend writes
/// for the link, read from the backend's convention for `flm.pres.link`, then
/// `target="_blank"`. `None` if the convention does not give them.
fn new_tab_tag(link: &LinkPayload) -> Option<(HtmlTagPayload, Option<&'static str>)> {
    let convention = row(pres::LINK)?;
    let attribute = |field: &str| convention.field(field).and_then(|f| f.attribute());
    let tag = HtmlTagPayload::new("a").attributes([
        (String::from("class"), convention.class()),
        (attribute("href")?, link.href.clone()),
        (attribute("kind")?, link.kind.to_string()),
        (String::from("target"), String::from("_blank")),
    ]);
    Some((tag, convention.style))
}

/// Whether `node` stands in the content of an element of its own tree that
/// writes a link around that content: another `\href` (its text), a
/// `\hyperref` or a `\term`. A link inside content shown somewhere else (a
/// heading's title that a `\ref` shows) is not seen here.
fn inside_link(node: &NodeRef<'_, Flm>) -> bool {
    let mut parent = node.parent();
    while let Some(ancestor) = parent {
        if [LINK_ELEMENT, HYPERREF, TERM].contains(&element_of(&ancestor).name.as_str()) {
            return true;
        }
        parent = ancestor.parent();
    }
    false
}

/// Whether the staged nodes `content` hold anything that may write a link:
/// a `flm.pres.link`, a tag construct that is an `<a>` (or whose payload
/// cannot be read), or an element outside `native`, which a later round of
/// lowering may turn into a link. Opaque content (mathematics, verbatim
/// content) is source text and is not examined, but for the document content
/// it holds, as flm-core's lowering driver reads it.
fn holds_link(cx: &mut LowerCx<'_>, content: &[BuildId], native: &BTreeSet<ElementName>) -> bool {
    let staged = cx.builder().staged_nodes();
    let mut stack: Vec<(BuildId, bool)> = content.iter().map(|&id| (id, false)).collect();
    while let Some((id, in_opaque)) = stack.pop() {
        let Some(view) = staged.get(id) else { return true };
        let element = &view.ext().element;
        let in_opaque = in_opaque && !element.has_aspect::<dyn ContentInOpaque>();
        if !in_opaque {
            if element.name.as_str() == pres::LINK {
                return true;
            }
            if element.name.as_str() == TAG {
                let tag = view.ext().payload.as_deref().and_then(|payload| payload.downcast_ref::<HtmlTagPayload>());
                if tag.is_none_or(|tag| tag.tag.eq_ignore_ascii_case("a")) {
                    return true;
                }
            } else if !native.contains(&element.name) {
                return true;
            }
        }
        let below = in_opaque || element.has_aspect::<dyn OpaqueContent>();
        stack.extend(view.children().iter().map(|&child| (child, below)));
    }
    false
}

#[cfg(test)]
mod tests {
    use super::is_local;

    #[test]
    fn local_addresses() {
        for address in ["#sec-x", "/c/steane", "/", "javascript:void(0)"] {
            assert!(is_local(address), "{address}");
        }
        for address in ["https://arxiv.org/abs/1", "http://x.org", "//cdn.example.org/a", "mailto:a@b.c", "figures/x.png", "?page=2", ""] {
            assert!(!is_local(address), "{address}");
        }
    }
}
