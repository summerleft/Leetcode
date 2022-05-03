/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    const length = logs.length;
    const arr = Array.from({ length }, (v, k) => [logs[k], k]);
    arr.sort((a, b) => logCompare(a, b));
    return arr.map((item) => item[0]);
};

const logCompare = (log1, log2) => {
    let [val1, index1] = log1;
    let [val2, index2] = log2;
    const split1 = split(val1);
    const split2 = split(val2);
    const isDigit1 = isDigit(split1[1][0]);
    const isDigit2 = isDigit(split2[1][0]);
    if (isDigit1 && isDigit2) {
        return index1 - index2;
    }
    if (!isDigit1 && !isDigit2) {
        const sc = compareTo(split1[1], split2[1]);
        if (sc !== 0) {
            return sc;
        }
        return compareTo(split1[0], split2[0]);
    }
    return isDigit1 ? 1 : -1;
};

const isDigit = (ch) => {
    return !isNaN(ch);
}

const compareTo = (left, right) => {
    let minLen = Math.min(left.length, right.length);
    for (let i = 0; i < minLen; i++) {
        if (left[i].charCodeAt() < right[i].charCodeAt()) return -1;
        if (left[i].charCodeAt() > right[i].charCodeAt()) return 1;
    }
    if (left.length === right.length) return 0;
    if (left.length > right.length) return 1;
    return -1;
}

const split = (str) => {
    const index = str.indexOf(" ");
    return [str.slice(0, index), str.slice(index + 1)];
}