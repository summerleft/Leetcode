/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const result = [];
    const path = [];
    backtracking(s, 0);
    return result;

    function backtracking(s, startIndex) {
        if (startIndex >= s.length) {
            result.push([...path]);
        }

        for (let i = startIndex; i < s.length; i++) {
            if (isValid(s, startIndex, i)) {
                const cur = s.substring(startIndex, i + 1);
                path.push(cur);
            } else {
                continue;
            }
            backtracking(s, i + 1);
            path.pop();
        }
    }

    function isValid(s, startIndex, endIndex) {
        const strArr = Array.from(s.substring(startIndex, endIndex + 1));
        for (let i = 0; i < Math.ceil(strArr.length / 2); i++) {
            if (strArr[i] !== strArr[strArr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
};