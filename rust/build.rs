//! Build script: exposes the resolved version of the `autocitefetch` crate as
//! the compile-time environment variable `AUTOCITEFETCH_VERSION`.
//!
//! The crate exports no version constant, so the version is read from this
//! package's `Cargo.lock` (which is committed). If it cannot be determined,
//! the value is `"unknown"` and a cargo warning is printed.

use std::{env, fs, path::Path};

fn main() {
    let manifest_dir = env::var("CARGO_MANIFEST_DIR").expect("CARGO_MANIFEST_DIR is set by cargo");
    let lock_path = Path::new(&manifest_dir).join("Cargo.lock");
    println!("cargo:rerun-if-changed={}", lock_path.display());
    println!("cargo:rerun-if-changed=build.rs");

    let version = fs::read_to_string(&lock_path)
        .ok()
        .and_then(|text| lock_version(&text, "autocitefetch"))
        .unwrap_or_else(|| {
            println!("cargo:warning=could not determine the autocitefetch version from Cargo.lock");
            String::from("unknown")
        });
    println!("cargo:rustc-env=AUTOCITEFETCH_VERSION={version}");
}

/// Returns the `version` of the `[[package]]` entry named `name` in a
/// `Cargo.lock` file.
fn lock_version(lock: &str, name: &str) -> Option<String> {
    let want = format!("name = \"{name}\"");
    let mut in_match = false;
    for line in lock.lines() {
        let line = line.trim();
        if line == "[[package]]" {
            in_match = false;
        } else if line == want {
            in_match = true;
        } else if in_match {
            if let Some(rest) = line.strip_prefix("version = \"") {
                return rest.strip_suffix('"').map(String::from);
            }
        }
    }
    None
}
