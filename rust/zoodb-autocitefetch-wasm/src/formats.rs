//! JSON/YAML parsing for bibliography files.
//!
//! This is where autocitefetch's *host-parses-config* principle lands for the
//! `bib` source kind. The `no_std` core depends on no format crate but
//! `serde_json`; [`BibliographyFileSource::with_parser`] takes a bytes →
//! [`CslValue`] function, so YAML costs the library nothing — a bib file is
//! still fetched through the one `Fetcher` choke point (a `file:` or `http(s):`
//! URL, handled by the JavaScript host), only the parse step changes.
//!
//! Lifted from `autocitefetch-cli/src/formats.rs` (via the pyo3 binding in
//! `flm-citations`); kept in sync with it by hand. The arXiv DOI-override file
//! is *not* read here: the JavaScript adapter parses it and passes the map as
//! data (`overrideDois`), per design decision D16.
//!
//! [`BibliographyFileSource::with_parser`]: autocitefetch::source::BibliographyFileSource::with_parser

use autocitefetch::CslValue;
use autocitefetch::source::BibParser;

/// Which parser a bibliography file should be read with.
#[derive(Clone, Copy, PartialEq, Eq, Debug, Default)]
pub enum Format {
    /// Try JSON, fall back to YAML.
    #[default]
    Auto,
    Json,
    Yaml,
}

impl Format {
    /// Parse a format name from a source spec (`auto`, `json`, `yaml`/`yml`).
    pub fn parse(name: &str) -> Result<Self, String> {
        match name {
            "auto" => Ok(Format::Auto),
            "json" => Ok(Format::Json),
            "yaml" | "yml" => Ok(Format::Yaml),
            other => Err(format!(
                "unknown bibliography format `{other}`; expected auto, json or yaml"
            )),
        }
    }
}

fn parse_json(bytes: &[u8]) -> Result<CslValue, String> {
    serde_json::from_slice(bytes).map_err(|e| format!("invalid JSON: {e}"))
}

fn parse_yaml(bytes: &[u8]) -> Result<CslValue, String> {
    serde_yaml_ng::from_slice(bytes).map_err(|e| format!("invalid YAML: {e}"))
}

/// Parse as JSON, falling back to YAML.
///
/// YAML 1.2 is very nearly a JSON superset, so running only the YAML parser
/// would usually work — but "very nearly" is not "exactly" (an integer literal
/// too large for the YAML reader's number type is valid JSON and rejected as
/// out of range), and its diagnostics for a *broken* JSON file are much worse
/// than serde_json's. So try the exact parser first, and report both failures:
/// a bibliography location may be a URL with no extension to guess from, and
/// hiding one parser's complaint would be worse than showing two.
fn parse_auto(bytes: &[u8]) -> Result<CslValue, String> {
    match parse_json(bytes) {
        Ok(v) => Ok(v),
        Err(json_err) => parse_yaml(bytes)
            .map_err(|yaml_err| format!("not parseable as JSON or YAML — {json_err}; {yaml_err}")),
    }
}

/// The [`BibParser`] implementing `format`.
pub fn parser_for(format: Format) -> BibParser {
    match format {
        Format::Auto => parse_auto,
        Format::Json => parse_json,
        Format::Yaml => parse_yaml,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn auto_accepts_json_and_yaml() {
        let json = br#"{"a": {"title": "T"}}"#;
        let yaml = b"a:\n  title: T\n";
        assert_eq!(parse_auto(json).unwrap(), parse_auto(yaml).unwrap());
        assert_eq!(
            parser_for(Format::Json)(json).unwrap(),
            parser_for(Format::Yaml)(yaml).unwrap()
        );
    }

    #[test]
    fn json_parser_rejects_yaml() {
        let err = parser_for(Format::Json)(b"a:\n  title: T\n").unwrap_err();
        assert!(err.contains("invalid JSON"), "{err}");
    }

    #[test]
    fn auto_accepts_json_the_yaml_reader_rejects() {
        // Why `auto` tries JSON first instead of leaning on YAML being a JSON
        // superset: it isn't quite one. An integer literal past the YAML
        // reader's range is valid JSON and an error there.
        let json = br#"{"a": 123456789012345678901234567890}"#;
        assert!(parse_yaml(json).is_err());
        assert!(parse_auto(json).is_ok());
    }

    #[test]
    fn auto_reports_both_parsers_on_garbage() {
        let err = parse_auto(b"not: [valid").unwrap_err();
        assert!(err.contains("JSON"), "{err}");
        assert!(err.contains("YAML"), "{err}");
    }

    #[test]
    fn yaml_csl_list_parses_to_array() {
        let yaml = b"- id: knuth84\n  type: book\n  title: The TeXbook\n  issued:\n    date-parts: [[1984]]\n";
        let v = parser_for(Format::Auto)(yaml).unwrap();
        assert_eq!(v[0]["id"], "knuth84");
        assert_eq!(v[0]["issued"]["date-parts"][0][0], 1984);
    }

    #[test]
    fn format_names_are_parsed_and_bad_ones_named() {
        assert_eq!(Format::parse("auto").unwrap(), Format::Auto);
        assert_eq!(Format::parse("json").unwrap(), Format::Json);
        assert_eq!(Format::parse("yml").unwrap(), Format::Yaml);
        assert!(Format::parse("bibtex").unwrap_err().contains("bibtex"));
    }
}
