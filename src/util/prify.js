
/**
 * Wrap a Node.js-style callback function `fn(..args, (err, result) => {})`
 * into a function that returns a `Promise`.
 *
 * @param {Function} fn - A function that accepts a Node.js error-first callback
 *     as its last argument.
 * @returns {Function} A wrapper that accepts the same positional arguments as
 *     `fn` (minus the callback) and returns a `Promise`.
 *
 * @example
 * const readFileAsync = promisify(fs.readFile);
 * const data = await readFileAsync('file.txt', 'utf-8');
 */
export function promisify(fn)
{
    return function(...args) {
        return new Promise( (resolve, reject) => {
            fn(...args,
               (err, ...results) => {
                   if (err != null) {
                       reject(err)
                   } else {
                       resolve(...results);
                   }
               });
        } );
    };
};



/**
 * Build a plain object with promisified versions of selected methods from
 * `obj`.  For each method name in `methods`, the result object's property is
 * set to `obj.promises[method]` (if that exists) or to `promisify(obj[method])`.
 *
 * @param {Object} obj - The source object, e.g. a Node.js `fs` module.
 * @param {string[]|null} [methods] - Method names to promisify.  When `null`,
 *     all own enumerable keys of `obj` are used.
 * @returns {Object} An object whose keys are the method names and whose values
 *     are the corresponding promisified functions.
 */
export function promisifyMethods(obj, methods = null)
{
    let prObj = {};
    for (const m of (methods ?? Object.keys(obj))) {
        // use existing obj.promises.[method], like fs.promises.readFile() etc.
        prObj[m] = obj.promises?.[m] || (obj[m] != null ? promisify(obj[m]) : null);
    }
    return prObj;
}


/**
 * Return a `Promise` that resolves after `ms` milliseconds.  The returned
 * promise also carries a `cancel_timeout()` method that rejects the promise
 * early and clears the underlying timer.
 *
 * @param {number} ms - Number of milliseconds to wait.
 * @returns {Promise}
 * 
 * The returned object also exposes a `result.cancel_timeout()` method (on the
 * promise instance.  This method can be called to cancel the timeout.
 *
 * @example
 * await timeout(500); // wait 500 ms
 *
 * const t = timeout(5000);
 * doSomething().then(() => t.cancel_timeout());
 * await t;
 */
export function timeout(ms)
{
    // return new Promise((resolve, reject) => { setTimeout(resolve, ms); });

    let d = {};
    let promise = new Promise( (resolve, reject) => {
        d.resolve = resolve;
        d.reject = reject;
    } );

    const timerId = setTimeout( () => { d.resolve(); }, ms );
    let cancel = () => { clearTimeout(timerId); d.reject(); };

    promise.cancel_timeout = cancel;

    return promise;
    
    // inspired by cancellation token - thanks
    // https://stackoverflow.com/a/30235261/1694896
}

