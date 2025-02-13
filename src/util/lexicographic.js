/**
 * Return a function that compares two arrays lexicographically according to
 * the given settings.
 * 
 * - `cmpArray` is an array of comparison operations to apply to each element
 *   of the arrays we'll have to compare later.  It is meant to express the
 *   expected type of the elements of the arrays we'll compare later.  Each
 *   element of `cmpArray` may either be a function `(a,b) => number in { -1, 0, +1 }`
 *   that does the comparison, or it may be one of the strings 'auto', 'string',
 *   'int', or 'number'.  If you provide the additional `cmpOps` argument, the elements
 *   of `cmpArray` may also be strings referring to custom comparison operations
 *   defined there.
 * 
 * - If provided, `cmpOps` is an object whose keys are additional custom comparison
 *   operations.  You provide the comparison function `(a,b) => number in { -1, 0, +1 }`
 *   here, and you refer to it in `cmpArray` using the associated string key.
 * 
 * - If provided, `cmpOpDefault` is the default comparison operation name to use
 *   ('auto', 'string', 'int', 'number', or a custom comparision function name in
 *   `cmpOps`) for additional array elements past the length of `cmpArray`.
 * 
 * If you're happy with the default `auto` comparison function for your array elements
 * then you can specify an empty `cmpArray` to use that default comparison function
 * for all array elements.
 */
export function makeLexicographicCompareFn(cmpArray, { cmpOps, cmpOpDefault }={})
{
    const nCmp = (a, b) => ( (a<b) ? -1 : ( (a === b) ? 0 : 1 ) );
    const cmpOpsFull = {
        auto: (a, b) => {
            if (typeof a !== typeof b) {
                console.warn(`Type mismatch in comparison`, a, b);
            }
            if (typeof a === 'number') {
                return nCmp(a, parseInt(b));
            }
            if (typeof a === 'string') {
                return a.localeCompare(b);
            }
            // stringify to JSON, hope for the best
            return JSON.stringify(a).localeCompare(JSON.stringify(b));
        },
        string: (a, b) => (''+a).localeCompare(b),
        int: (a, b) => nCmp(parseInt(a), parseInt(b)),
        number: (a, b) => nCmp(parseFloat(a), parseFloat(b)),
        ...(cmpOps ?? {}),
    };
    const cmpFns = (cmpArray??[]).map( (x) => (typeof x === 'string' ? cmpOpsFull[x] : x) );
    const cmpFnDefault = cmpOpsFull[cmpOpDefault ?? 'auto'];

    const lxCmp = (arr1, arr2) => {
        const minLength = arr1.length < arr2.length ? arr1.length : arr2.length;
        
        for (let i = 0; i < minLength; i++) {
            const val1 = arr1[i];
            const val2 = arr2[i];
            const cmp = (i < cmpFns.length) ? cmpFns[i] : cmpFnDefault;
            const cmpValue = cmp(val1, val2);
            if (cmpValue !== 0) {
                return cmpValue;
            }
        }
        
        return arr1.length - arr2.length;
    }
    return lxCmp;
};
  