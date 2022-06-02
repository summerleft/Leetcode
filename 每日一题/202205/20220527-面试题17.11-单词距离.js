/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var findClosest = function(words, word1, word2) {
    let ans = words.length;
    let p = -1, q = -1;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) p = i;
        if (words[i] === word2) q = i;
        if (p !== -1 && q !== -1) {
            ans = Math.min(ans, Math.abs(p - q));
        }
    }
    return ans;
};