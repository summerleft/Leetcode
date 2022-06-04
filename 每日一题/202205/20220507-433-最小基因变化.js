/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    const cnt = new Set();
    const keys = ['A', 'C', 'G', 'T'];
    const visted = new Set();
    for (const w of bank) {
        cnt.add(w);
    }
    if (start === end) {
        return 0;
    }
    if (!cnt.has(end)) {
        return -1;
    }
    const queue = [start];
    visted.add(start);
    let step = 1;
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            for (let j = 0; j < 8; j++) {
                for (let k = 0; k < 4; k++) {
                    if (keys[k] !== cur[j]) {
                        const sb = [...cur];
                        sb[j] = keys[k];
                        const next = sb.join('');
                        if (!visted.has(next) && cnt.has(next)) {
                            if (next === end) {
                                return step;
                            }
                            queue.push(next);
                            visted.add(next);
                        }
                    }
                }
            }
        }
        step++;
    }
    return -1;
};