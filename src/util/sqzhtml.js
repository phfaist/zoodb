// cf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
export function sqzhtml(strings, ...values)
{
    //
    // "Squeeze" HTML template strings (only the template strings themselves,
    // the interpolated values are not touched) -- remove newlines and
    // accompanying whitespace immediately before/after tag beginning/end.  Keep
    // all other newlines and whitespace.
    //
    const lastIndex = strings.length - 1;
    let collapsed_strings = strings.map(
        (x, index) => {
            let s = x.replace(/>\n+ */g, '>').replace(/\n+ *</g, '<');
            if (index === 0) {
                return s.trimStart();
            } else if (index === lastIndex) {
                return s.trimEnd();
            }
            return s;
        }
    );
    return String.raw({ raw: collapsed_strings }, ...values);
}

