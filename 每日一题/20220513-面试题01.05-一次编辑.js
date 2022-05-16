/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function(first, second) {
    if (first === second) return true;
    const firstLength = first.length;
    const secondLength = second.length;
    if (Math.abs(firstLength - secondLength) > 1) return false;
    const firstArr = first.split('');
    const secondArr = second.split('');
    let p1 = 0, p2 = 0;
    let change = false;
    while (p1 < firstLength && p2 < secondLength) {
        if (firstArr[p1] === secondArr[p2]) {
            p1++;
            p2++;
        } else {
            if (change) return false;
            change = true;
            if (firstLength > secondLength) {
                p1++;
            } else if (firstLength < secondLength) {
                p2++;
            } else {
                p1++;
                p2++;
            }
        }
    }
    return true;
};