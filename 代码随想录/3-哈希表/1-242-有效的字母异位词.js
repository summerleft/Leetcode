/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const resArray = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for (const i of s) {
    resArray[i.charCodeAt() - base]++;
  }
  for (const i of t) {
    if (!resArray[i.charCodeAt() - base]) return false;
    resArray[i.charCodeAt() - base]--;
  }
  return true;
};