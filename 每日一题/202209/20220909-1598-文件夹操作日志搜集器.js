/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    const logsArray = [...logs];
    const stack = [];
    logsArray.forEach((item) => {
        if (item === '../') {
            stack.length && stack.pop();
        } else if (item === './') {
            
        } else {
            stack.push(item);
        }
    });
    return stack.length;
};