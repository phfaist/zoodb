# ZooDb - JavaScript tools for building a zoo

ZooDb is a package to build an in-memory database of a "Zoo", a small-sized
database with relations and formatted content. It is designed to be the backbone
of the [Error Correctoin Zoo](https://errorcorrectionzoo.org/).

Features:

- Database stored in JSON/YAML files and specified by JsonSchema files.
- Support for content in [FLM](https://github.com/phfaist/flm) markup format.
- Automatically populated relationship fields and backreferences, based
  on simple text fields storing primary keys/IDs.
- Seamless integration into [11ty](https://11ty.dev/) to generate static HTML websites
- Highly customizable
- etc.

Documentation: https://zoodb.readthedocs.io/en/latest/
