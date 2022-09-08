/**
 * @param {string} text
 * @return {string}
 */
 var reorderSpaces = function(text) {
    const textArr = [...text];
    let spaceCount = 0;
    let curWord = '', words = [];
    for (let i = 0; i < textArr.length; i++) {
        const cur = textArr[i];
        if (cur === ' ') {
            spaceCount++;
            curWord && words.push(curWord);
            curWord = '';
        } else {
            curWord += cur;
        }
    }
    curWord && words.push(curWord);
    if (words.length === 1) {
        let res = words[0];
        while(spaceCount--) {
            res += ' ';
        }
        return res;
    }
    let spaceLength = Math.floor(spaceCount / (words.length - 1));
    let remainSpaceLength = spaceCount - spaceLength * (words.length - 1);
    let space = '', remainSpace = '';
    while (spaceLength--) {
        space += ' ';
    }
    while (remainSpaceLength--) {
        remainSpace += ' ';
    }
    let res = words.join(space);
    return res + remainSpace;
};