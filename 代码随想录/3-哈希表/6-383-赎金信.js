/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (const letter of magazine) {
    if (!map.has(letter)) {
      map.set(letter, 1);
    } else {
      map.set(letter, map.get(letter) + 1);
    }
  }
  for (const note of ransomNote) {
    if (!map.has(note) || map.get(note) === 0) {
      return false;
    }
    if (map.has(note)) {
      map.set(note, map.get(note) - 1);
    }
  }
  return true;
};

// var canConstruct = function(ransomNote, magazine) {
//   const strArr = new Array(26).fill(0), 
//       base = "a".charCodeAt();
//   for(const s of magazine) {
//       strArr[s.charCodeAt() - base]++;
//   }
//   for(const s of ransomNote) {
//       const index = s.charCodeAt() - base;
//       if(!strArr[index]) return false;
//       strArr[index]--;
//   }
//   return true;
// };