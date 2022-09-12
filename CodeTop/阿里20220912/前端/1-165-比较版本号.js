/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const arr1 = version1.split('.').map(item => parseInt(item));
    const arr2 = version2.split('.').map(item => parseInt(item));
    while (arr1.length > arr2.length) {
        arr2.push(0);
    }
    while (arr1.length < arr2.length) {
        arr1.push(0);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return 1;
        } else if (arr1[i] < arr2[i]) {
            return -1;
        } else {
            continue;
        }
    }
    return 0;    
};