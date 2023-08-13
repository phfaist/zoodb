
export const promisify = (fn) => {
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



export function promisifyMethods(obj, methods = null)
{
    let prObj = {};
    for (const m of (methods ?? Object.keys(obj))) {
        // use existing obj.promises.[method], like fs.promises.readFile() etc.
        prObj[m] = obj.promises?.[m] || (obj[m] != null ? promisify(obj[m]) : null);
    }
    return prObj;
}


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

