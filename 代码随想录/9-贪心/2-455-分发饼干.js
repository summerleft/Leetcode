/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g = g.sort((a, b) => b - a);
    s = s.sort((a ,b) => b - a);
    console.log(g);
    console.log(s);
    let count = 0;
    let curG = 0, curS = 0;
    while (curG < g.length && curS < s.length) {
        console.log([curS, curG])
        if (s[curS] >= g[curG]) {
            count++;
            curG++;
            curS++;
        } else {
            curG++;
        }
        
    }
    return count;
};

findContentChildren([1,2,3], [1,1])
