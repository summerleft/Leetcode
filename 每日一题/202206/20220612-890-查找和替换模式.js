/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    const patternArray = [...pattern];
    const res = [];
    for (const word of words) {
        const wordArray = [...word];
        const map = new Map();
        const set = new Set();
        for (let i = 0; i < wordArray.length; i++) {
            if (map.has(patternArray[i])) {
                if (map.get(patternArray[i]) !== wordArray[i]) {
                    break;
                }
            } else {
                
                if (set.has(wordArray[i])) {
                    break;
                } else {
                    set.add(wordArray[i])
                }
                map.set(patternArray[i], wordArray[i]);
            }
            if (i === wordArray.length - 1) {
                res.push(word);
            }
        }
    }
    return res;
};