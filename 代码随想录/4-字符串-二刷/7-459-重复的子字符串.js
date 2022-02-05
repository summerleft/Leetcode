/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const getNext = (needle) => {
    let next = [];
    let j = -1;
    next.push(j);
    for (let i = 1; i < needle.length; i++) {
      while (j >= 0 && needle[i] !== needle[j + 1]) {
        j = next[j]
      }
      if (needle[i] === needle[j + 1]) {
        j++;
      }
      next.push(j);
    }
    return next;
  }

  const next = getNext(s);
  if (next[next.length - 1] !== -1 && next.length % (next.length - next[next.length - 1] - 1) === 0) {
    return true;
  }
  return false;
};