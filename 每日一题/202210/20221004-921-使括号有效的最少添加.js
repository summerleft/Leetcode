/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    let score = 0, temp = 0;
    for (const char of s) {
        score += char === '(' ? 1 : -1;
        if (score < 0) {
            score = 0;
            temp++;
        }
    }
    return score + temp;
};