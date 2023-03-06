const s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  if (!s.length) return true;
  const noAlphanumeric = removeNoAlpha(s).toLowerCase();
  const reverse = noAlphanumeric.split("").reverse().join("");
  return reverse === noAlphanumeric;
};

function removeNoAlpha(s) {
  const regexPattern = /[^A-Za-z0-9]/g;
  return s.replace(regexPattern, "");
}
console.log(isPalindrome(s));
