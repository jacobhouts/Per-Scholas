/*for (let x= 1; x<=50; x++) {
    if (x % 5 == 0 && x % 3 == 0) {
        console.log(x + " fizzbuzz")
    }
    else if (x % 3 == 0) {
        console.log(x + " fizz")
    }
    else if (x % 5 == 0) {
        console.log(x + " buzz")
    }
} */

let x=1;
while (x<=50) {
    if (x % 5 == 0 && x % 3 == 0) {
        console.log(x + " fizzbuzz")
    }
    else if (x % 3 == 0) {
        console.log(x + " fizz")
    }
    else if (x % 5 == 0) {
        console.log(x + " buzz")
    }
    x++
}