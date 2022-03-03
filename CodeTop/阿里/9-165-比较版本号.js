/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let arr1 = version1.split('.');
    let arr2 = version2.split('.');
    arr1 = arr1.map((item) => parseInt(item));
    arr2 = arr2.map((item) => parseInt(item));
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        let x = 0, y = 0;
        if (i < arr1.length) {
            x = arr1[i];
        } 
        if (i < arr2.length) {
            y = arr2[i];
        }
        if (x > y) return 1;
        if (x < y) return -1;
    } 
    return 0;
};