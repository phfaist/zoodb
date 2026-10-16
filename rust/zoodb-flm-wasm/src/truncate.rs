//! The truncation helper (R18, Q13): a fragment's source cut to about N
//! characters at the node level, for previews. The old FLM's `truncate_to`
//! rebuilt a node list; here the parsed tree gives the cut position in the
//! source, the shortened source gets the marker and the open delimiters
//! closed, and the caller parses it again as a new fragment.
//!
//! Counting follows the old `_NodeListTruncator`: characters count their
//! length; a command or a brace group counts the characters inside it; a
//! mathematics group and a special character sequence count their source
//! length and are kept whole or left out; comments count nothing. The cut
//! falls inside a run of characters, at the last non-alphabetic character
//! (a word boundary), once `chars` is reached and at least `min_chars` are
//! kept. A cut inside a brace group or a command's argument closes the group
//! with its own delimiter; a cut would never fall inside an environment's
//! body: an environment that does not fit is left out whole.

use flm_core::lang::{Flm, FlmCallableType, FlmGroupType};
use flm_core::model::doc::Fragment;
use flm_core::techy::core::node::{NodeKind, NodeRef};

pub struct Truncation {
    /// The shortened source with the marker, or the whole source when no
    /// truncation was needed.
    pub source: String,
    pub truncated: bool,
    /// The byte offset in the original source at which the content was cut.
    pub cut_at: Option<usize>,
}

struct Walk<'a> {
    text: &'a str,
    chars: usize,
    min_chars: usize,
    count: usize,
    /// The closing delimiters of the groups open at the cut, innermost last.
    closers: Vec<String>,
}

enum Step {
    /// The node fits; the count was advanced.
    Fits,
    /// Stop before this node.
    StopBefore,
    /// Stop inside this node, at this byte offset of the source.
    CutAt(usize),
}

impl<'a> Walk<'a> {
    fn chars_node(&mut self, node: &NodeRef<'_, Flm>) -> Step {
        let text = node.chars().unwrap_or_default();
        let len = text.chars().count();
        if self.count + len < self.chars {
            self.count += len;
            return Step::Fits;
        }
        // Cut at the last word boundary reached before the budget runs out.
        let mut last_break = 0usize;
        let mut cut = None;
        for (j, (byte, c)) in text.char_indices().enumerate() {
            if !c.is_alphabetic() {
                last_break = byte;
            }
            if self.count + j > self.chars && self.count + last_break >= self.min_chars {
                cut = Some(last_break);
                break;
            }
        }
        match cut {
            Some(offset) => Step::CutAt(node.span().start() + offset),
            None => {
                self.count += len;
                Step::Fits
            }
        }
    }

    fn node(&mut self, node: &NodeRef<'_, Flm>) -> Step {
        match node.kind() {
            NodeKind::Chars { .. } => self.chars_node(node),
            NodeKind::Comment(_) => Step::Fits,
            NodeKind::Group(_) if matches!(node.group_type(), Some(FlmGroupType::Math(_))) => self.whole(node),
            NodeKind::Group(_) => {
                // The group's own delimiter closes it after a cut inside.
                let span = node.span();
                let closer = self.text[span.start()..span.end()].chars().last().map(|c| c.to_string()).unwrap_or_default();
                self.closers.push(closer);
                let step = self.children(node);
                match step {
                    Step::CutAt(_) => step,
                    _ => {
                        self.closers.pop();
                        step
                    }
                }
            }
            NodeKind::List => self.children(node),
            NodeKind::Callable(_) => match node.callable_type() {
                Some(FlmCallableType::Environment) => {
                    // Kept whole or left out: count what is inside, never cut inside.
                    let before = self.count;
                    let closers = self.closers.len();
                    match self.children(node) {
                        Step::Fits => Step::Fits,
                        _ => {
                            self.count = before;
                            self.closers.truncate(closers);
                            Step::StopBefore
                        }
                    }
                }
                Some(FlmCallableType::Macro) => self.children(node),
                _ => self.whole(node),
            },
        }
    }

    /// A node kept whole or left out, counted by its source length.
    fn whole(&mut self, node: &NodeRef<'_, Flm>) -> Step {
        let len = node.span().end().saturating_sub(node.span().start());
        if len < self.chars.saturating_sub(self.count) {
            self.count += len;
            Step::Fits
        } else {
            Step::StopBefore
        }
    }

    fn children(&mut self, node: &NodeRef<'_, Flm>) -> Step {
        let children: Vec<_> = node.children().iter().collect();
        self.nodes(&children)
    }

    fn nodes(&mut self, nodes: &[NodeRef<'_, Flm>]) -> Step {
        for child in nodes {
            match self.node(child) {
                Step::Fits => {}
                Step::StopBefore => return Step::CutAt(child.span().start()),
                Step::CutAt(at) => return Step::CutAt(at),
            }
        }
        Step::Fits
    }
}

/// Truncates the parsed `fragment` of `text` to about `chars` characters;
/// `first_paragraph` keeps the content before the first paragraph break
/// (`flm.parbreak`, a blank line; paragraphs themselves are only made by the
/// block-structure rewrite of a run, so the parsed tree is flat).
pub fn truncate(text: &str, fragment: &Fragment, chars: usize, min_chars: Option<usize>, marker: &str, first_paragraph: bool) -> Truncation {
    let root = fragment.tree().root();
    let mut walk = Walk { text, chars, min_chars: min_chars.unwrap_or(0), count: 0, closers: Vec::new() };
    let children: Vec<_> = root.children().iter().collect();
    let (step, range_end) = if first_paragraph {
        let is_break = |n: &NodeRef<'_, Flm>| flm_core::model::element::element_of(n).name == flm_core::lang::structural::PARBREAK;
        match children.iter().position(is_break) {
            Some(i) => (walk.nodes(&children[..i]), children[i].span().start()),
            None => (walk.nodes(&children), text.len()),
        }
    } else {
        (walk.nodes(&children), text.len())
    };
    match step {
        Step::Fits => Truncation { source: text[..range_end].trim_end().to_string(), truncated: first_paragraph && range_end < text.len(), cut_at: None },
        Step::StopBefore | Step::CutAt(_) => {
            let at = match step {
                Step::CutAt(at) => at,
                _ => range_end,
            };
            let mut source = text[..at].trim_end().to_string();
            source.push_str(marker);
            for closer in walk.closers.iter().rev() {
                source.push_str(closer);
            }
            Truncation { source, truncated: true, cut_at: Some(at) }
        }
    }
}
