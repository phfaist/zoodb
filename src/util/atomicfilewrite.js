import path from 'path';

/**
 * Write `data` to the file with the given `fileName`, overwriting it silently if it
 * exists.  The write first happens to a temporary hidden file, and finally after the
 * write succeeds, the temporary file is renamed to the target file.  This procedure
 * prevents the output file from being corrupted if the process is interrupted while
 * data is being written to the file.
 * 
 * Arguments:
 * 
 * - `fsp` a promisified filesystem object compatible with Node.js' promisified `fs`
 *   object.
 * 
 * - `fileName` the name of the final file to write to.
 * 
 * - `data` the data to write to the file.  Can be string, typed array, or whatever
 *   fsp's `writeFile()` can handle.
 * 
 * - `processPid` - specify `process.pid` here (or whatever you choose to use as relevant
 *   PID for platforms/browser that might not have process PIDs).
 */
export async function writeFileAtomic({ fsp, fileName, data, useTempDir, processPid })
{
    let atomicWriteTempFileName = null;
    let counter = 0;
    let dataWritten = false;

    const fDir = useTempDir ?? path.dirname(fileName) ?? '';
    const fBaseTemplate = `.atomicwrite.${path.basename(fileName)}.${processPid}`

    while (!dataWritten && counter <= 99) {
        atomicWriteTempFileName = path.join(
            fDir,
            `${fBaseTemplate}.${counter}.tmp`
        );
        // do not accidentally overwrite a file; use 'wx' as open flags so that open fails
        // if the file exists.
        try {
            await fsp.writeFile(atomicWriteTempFileName, data, {
                flag: 'wx',
            });
            dataWritten = true;
        } catch (err) {
            // if file already exists, try another one
            if (err && err.code === 'EEXIST') {
                ++ counter;
            } else {
                // it's another error, send it up the chain
                throw err;
            }
        }
    }
    if (!dataWritten) {
        throw new Error(`writeFileAtomic: Failed to find temporary file to write to!`);
    }
    await fsp.rename(atomicWriteTempFileName, fileName);
}
