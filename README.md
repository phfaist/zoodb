# ZooDb - JavaScript tools for building a zoo

ZooDb is a package to build an in-memory database of a "Zoo", a small-sized
database with relations and formatted content. It is designed to be the backbone
of the [Error Correction Zoo](https://errorcorrectionzoo.org/).

Features:

- Database stored in JSON/YAML files and specified by JsonSchema files.
- Content in FLM, a LaTeX-like markup language
  ([syntax](https://zoodb.readthedocs.io/en/latest/flm/)), processed by
  flm-rs, the Rust implementation of FLM, compiled to WebAssembly (bundled; no
  Rust toolchain needed to use the package)
- Automatically populated relationship fields and backreferences, based
  on simple text fields storing primary keys/IDs.
- Seamless integration into [11ty](https://11ty.dev/) to generate static HTML websites
- Automatic retrieval of bibliographic citations (arXiv, DOI, bibliography
  files), through the Rust crate
  [`autocitefetch`](https://crates.io/crates/autocitefetch) compiled to
  WebAssembly (bundled; no Rust toolchain needed to use the package)
- Highly customizable
- etc.

Documentation: https://zoodb.readthedocs.io/en/latest/

Release notes: [CHANGELOG.md](CHANGELOG.md) (version 0.3.0 replaces the FLM
layer: zoos written for 0.2 need to be ported).
