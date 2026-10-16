//! Build script: links the WebAssembly module with a 64 MiB stack.
//!
//! The recursion guard of `flm-core` assumes a worker thread with 64 MiB of
//! stack (its `WORKER_STACK_SIZE`); a wasm module has one thread, whose stack
//! is sized at link time, and `start()` marks that thread as the worker
//! thread. The argument is emitted only for a `wasm32` target: the host build
//! of `cargo test` links natively and must not get it. A configurable guard
//! budget in `flm-core` (upstream request U1) is the way to lower it later.

use std::env;

fn main() {
    println!("cargo:rerun-if-changed=build.rs");
    if env::var("CARGO_CFG_TARGET_ARCH").as_deref() == Ok("wasm32") {
        println!("cargo:rustc-link-arg=-zstack-size=67108864");
    }
}
