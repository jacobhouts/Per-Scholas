/*const sentence = "Oh, shackle I- did you mispeak?"
if (sentence.indexOf("did") !=-1) {
    console.log("shut up, no one likes poetry")
} */



/*const sentence = "I reflect in vain, love lost in the long rain";
let result = sentence.slice(19);

console.log(result) */


/*
const sentence = "I reflect in vain, love lost in the long rain"
let result= sentence.split(' ');

console.log(result); */


/*
const sentence="I reflect in vain, ";
const sentence2="love lost in the long rain";
let result = sentence.concat(sentence2);

console.log(result); */



const sentence="I reflect in vein, love lost in the long rain"
let newSentence = sentence.replace(/vein/gi, "vain")

console.log(newSentence)