/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    const sum = matchsticks.reduce((pre, cur) => {
        return pre + cur;
    });
    if (sum % 4 !== 0) return false;
    matchsticks.sort((a, b) => b - a);
    const edges = new Array(4).fill(0);
    return dfs(0, matchsticks, edges, sum / 4);
};

const dfs = (index, matchsticks, edges, len) => {
    if (index === matchsticks.length) {
        return true;
    }
    for (let i = 0; i < edges.length; i++) {
        edges[i] += matchsticks[index];
        if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) {
            return true;
        }
        edges[i] -= matchsticks[index];
    }
    return false;
}