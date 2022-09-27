/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    const strArr1 = [...num1].map((item) => parseInt(item)),
          strArr2 = [...num2].map((item) => parseInt(item));
    while (strArr1.length < strArr2.length) {
        strArr1.unshift(0);
    }
    while (strArr1.length > strArr2.length) {
        strArr2.unshift(0);
    }
    let add = 0; // 进位标识符
    const res = [];
    for (let i = strArr1.length - 1; i >= 0; i--) {
        const temp = strArr1[i] + strArr2[i] + add;
        const sum = temp % 10;
        res.unshift(sum);
        add = temp >= 10 ? 1 : 0;
    }
    if (add === 1) {
        res.unshift(1);
    }
    return res.join('');
};