/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const set = new Array(26).fill(0);
  const base = 'a'.charCodeAt();
  for (const i of s) {
    set[i.charCodeAt() - base]++;
  }
  for (const i of t) {
    set[i.charCodeAt() - base]--;
  }
  for (const i of set) {
    if (i !== 0) return false;
  }
  return true;
};