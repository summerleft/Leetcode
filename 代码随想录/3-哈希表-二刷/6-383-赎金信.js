/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (const i of magazine) {
    if (map.get(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  for (const s of ransomNote) {
    if (!map.get(s)) {
      return false;
    }
    map.set(s, map.get(s) - 1);
    if (map.get(s) < 0) {
      return false;
    }
  }
  return true;
};