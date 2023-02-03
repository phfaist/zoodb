
export function split_prefix_label(label)
{
    const idx = label.indexOf(':');
    if (idx == -1) {
        // not found
        return [ null, label ];
    }
    return [label.slice(0,idx), label.slice(idx+1)];
}
