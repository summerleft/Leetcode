/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order.charAt(i), i);
    }
    for (const [i, w] of words.entries()) {
        if (i === words.length - 1) {
            break;
        }
        for (let j = 0; j < w.length; j++) {
            if (j === words[i + 1].length) {
                return false;
            }
            const a = map.get(w.charAt(j));
            const b = map.get(words[i + 1].charAt(j));
            if (a > b) {
                return false;
            } else if (a < b) {
                break;
            }
        }
    }
    return true;
};