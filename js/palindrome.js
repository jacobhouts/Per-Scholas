let originalWord = "mom";
let wordLength = (orginalWord.length - 1);
var backwardsWord= ""

for (wordLength; wordLength >= 0; wordLength--) {
    backwardsWord += originalWord.charAt(wordLength)
}

if (originalWord == backwardsWord) {
    console.log(originalWord + " is a palindrome.")
}else {
    console.log(originalWord + " is not a palindrome.")
}