/*function inspire() {
    console.log('You can do this!');
    console.log('you go girl!');
    console.log('that IS so Raven');
}

inspire(); */

/*function reverseString(str) {
    let string2= "";
    for (let i= str.length -1; i>=0; i--) {
        string2 += str[i];
    }
    return string2;
}
const result= reverseString("omnibus");
console.log(result); */


/*function findLongestWord(str) {
    var ray= str.split(' ');
    var longestWord= 0;
    for(let i=0; i<ray.length; i++) {
        if(ray[i].length>longestWord){
        longestWord= ray[i].length;
        }
    }
    return longestWord;
}
findLongestWord("pass the stapler"); */


function filterLongWords(str) {
    var ray= ['something', 'with', 'an', 'accent'];
    var LongestWord= 3;
    var filtered= ray.filter(function(x)) {
        return x.length>3;
    }
}
filterLongWords("something with an accent");
console.log(filtered);