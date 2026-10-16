//! Build script: exposes the resolved version of the `autocitefetch` crate as
//! the compile-time environment variable `AUTOCITEFETCH_VERSION`.
//!
//! The crate exports no version constant, so the version is read from the
//! workspace's `Cargo.lock` (committed at `rust/Cargo.lock`, found by walking
//! up from this package's directory to the first `Cargo.lock`). If it cannot
//! be determined, the value is `"unknown"` and a cargo warning is printed.

use std::{
    env, fs,
    path::{Path, PathBuf},
};

fn main() {
    let manifest_dir = env::var("CARGO_MANIFEST_DIR").expect("CARGO_MANIFEST_DIR is set by cargo");
    println!("cargo:rerun-if-changed=build.rs");

    let version = match find_lock(Path::new(&manifest_dir)) {
        Some(lock_path) => {
            println!("cargo:rerun-if-changed={}", lock_path.display());
            fs::read_to_string(&lock_path)
                .ok()
                .and_then(|text| lock_version(&text, "autocitefetch"))
        }
        None => None,
    };
    let version = version.unwrap_or_else(|| {
        println!("cargo:warning=could not determine the autocitefetch version from Cargo.lock");
        String::from("unknown")
    });
    println!("cargo:rustc-env=AUTOCITEFETCH_VERSION={version}");
}

/// The first `Cargo.lock` in `dir` or one of its ancestors (the workspace
/// root's, for a member of a workspace).
fn find_lock(dir: &Path) -> Option<PathBuf> {
    dir.ancestors().map(|d| d.join("Cargo.lock")).find(|p| p.is_file())
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
