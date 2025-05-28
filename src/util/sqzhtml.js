/**
 * A utility for typing template literal strings in JavaScript for generating
 * HTML, while removing some spurious whitespace.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.
 *
 * Use as follows:
 *
 * .. code::
 *
 *    url = 'https://errorcorrectionzoo.org';
 *    html_block = sqzhtml`
 *      <div>
 *        Link to the <a href="${url}">Error
 *        Correction Zoo</a>.
 *      </div>
 *    `;
 *    // --> html_block =
 *    // '<div>Link to the <a href="https://errorcorrectionzoo.org">Error\n'
 *    // + '    Correction Zoo</a>.</div>'
 *
 * "Squeeze" HTML template strings (only the template strings themselves,
 * the interpolated values are not touched) -- remove newlines and
 * accompanying whitespace immediately before/after tag beginning/end.  Keep
 * all other newlines and whitespace.
 *
 */
export function sqzhtml(strings, ...values)
{
    // cf 
    const lastIndex = strings.length - 1;
    let collapsed_strings = strings.map(
        (x, index) => {
            let s = x.replaceAll(/>\n+ */g, '>').replaceAll(/\n+ *</g, '<');
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

