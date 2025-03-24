console.log(isAnagram("baaaa", "aabaa"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const mapS = new Map();
  const mapT = new Map();

  if (!s || !t || s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!mapS.get(s[i])) {
      mapS.set(s[i], 1);
    } else {
      mapS.set(s[i], mapS.get(s[i]) + 1);
    }
    if (!mapT.get(t[i])) {
      mapT.set(t[i], 1);
    } else {
      mapT.set(t[i], mapT.get(t[i]) + 1);
    }
  }

  for (var [key] of mapS) {
    if (mapS.get(key) !== mapT.get(key)) return false;
  }

  return true;
}
