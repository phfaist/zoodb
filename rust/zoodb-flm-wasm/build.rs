//! Build script: links the WebAssembly module with a 64 MiB stack, and
//! exposes the resolved version of `flm-core` as the compile-time environment
//! variable `FLM_CORE_VERSION`.
//!
//! The recursion guard of `flm-core` assumes a worker thread with 64 MiB of
//! stack (its `WORKER_STACK_SIZE`); a wasm module has one thread, whose stack
//! is sized at link time, and `start()` marks that thread as the worker
//! thread. The argument is emitted only for a `wasm32` target: the host build
//! of `cargo test` links natively and must not get it. A configurable guard
//! budget in `flm-core` (upstream request U1) is the way to lower it later.
//!
//! `flm-core` exports no version constant, so the version is read from the
//! workspace's `Cargo.lock` (committed at `rust/Cargo.lock`, found by walking
//! up from this package's directory to the first `Cargo.lock`), as the
//! citation crate does for `autocitefetch`. If it cannot be determined, the
//! value is `"unknown"` and a cargo warning is printed.

use std::{
    env, fs,
    path::{Path, PathBuf},
};

fn main() {
    println!("cargo:rerun-if-changed=build.rs");
    if env::var("CARGO_CFG_TARGET_ARCH").as_deref() == Ok("wasm32") {
        println!("cargo:rustc-link-arg=-zstack-size=67108864");
    }

    let manifest_dir = env::var("CARGO_MANIFEST_DIR").expect("CARGO_MANIFEST_DIR is set by cargo");
    let version = match find_lock(Path::new(&manifest_dir)) {
        Some(lock_path) => {
            println!("cargo:rerun-if-changed={}", lock_path.display());
            fs::read_to_string(&lock_path).ok().and_then(|text| lock_version(&text, "flm-core"))
        }
        None => None,
    };
    let version = version.unwrap_or_else(|| {
        println!("cargo:warning=could not determine the flm-core version from Cargo.lock");
        String::from("unknown")
    });
    println!("cargo:rustc-env=FLM_CORE_VERSION={version}");
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
