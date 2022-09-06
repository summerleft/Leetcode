/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    const result = [];
    const path = [];
    backtracking(s, 0, 0);
    return result;

    function backtracking(s, startIndex) {
        const len = path.length;
        if (len > 4) return;
        if (len === 4 && startIndex === s.length) {
            result.push(path.join('.'));
            return;
        }
        for (let i = startIndex; i < s.length; i++) {
            if (isValid(s, startIndex, i)) {
                path.push(s.substring(startIndex, i + 1));
            } else {
                continue;
            }
            backtracking(s, i + 1);
            path.pop();
        }
    }

    function isValid(s, startIndex, endIndex) {
        const cur = s.substring(startIndex, endIndex + 1);
        const val = parseInt(cur);
        if (val !== 0 && [...cur][0] === '0' ) {
            return false;
        } 
        if (val === 0 && cur.length > 1) return false;
        if (cur >= 0 && cur <= 255) return true;
        return false;
    }
};