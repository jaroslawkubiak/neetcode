const s = "A man, a plan, a canal: Panama";


var isPalindrome = function(s) {
    if (!s.length) return true;
    
    const alphaNumeric = filterAlphaNumeric(s);
    const reversed = reverse(alphaNumeric);    
    
    return alphaNumeric === reversed;
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()               
    .replace(nonAlphaNumeric, '')

const reverse = (s) => s
    .split('')
    .reverse()
    .join('');


console.log(isPalindrome(s));