/* var str= "test"

for (i = 0 ; i< str.length; i++) {
    console.log(str[i] + " is " + i)
}
*/

let fname= "Fletcher "
let lname= "Houts" 
let address= "923 appleton st"

console.log(fname.toLowerCase()); //display first name in all lower case
console.log(lname.toUpperCase()); //display last name in all capitol letters
console.log(fname.concat(lname)) //display first name and last name concatinated
console.log(fname.indexOf('l')) //find the index of the first "l" in the first name
console.log(lname.lastIndexOf('u')) //find the index of the last "u" in the last name
console.log(fname.charAt(5)) //display the fifth character of the first name

console.log(address.lastIndexOf(9))