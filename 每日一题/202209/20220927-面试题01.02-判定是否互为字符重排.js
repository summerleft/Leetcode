/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
    const len1 = s1.length,
          len2 = s2.length;
    if (len1 !== len2) return false;
    const map = new Map();
    const arr1 = [...s1],
          arr2 = [...s2];
    arr1.forEach((item) => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    })
    for (let i = 0; i < arr2.length; i++) {
        const cur = arr2[i];
        if (!map.has(cur)) return false;
        if (map.get(cur) === 0) return false;
        map.set(cur, map.get(cur) - 1);
    }
    const keys = map.keys();
    for (key of keys) {
        if (map.get(key) !== 0) return false;
    }
    return true;
};