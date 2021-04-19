let randomNum = 8000;
let isPrime = true;
for (let i = 2; i < randomNum; i++) {
    if (randomNum % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime == true) {
    console.log(randomNum + " is a prime number")
} else if (isPrime == false) {
    console.log(randomNum + " not a prime number")
}