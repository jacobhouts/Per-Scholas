let sum = 0;
number = 371;

//create a temporary variable
let quo = number;
while (quo > 0) {
    //get the last digit
    let remainder = temp % 10;
    console.log("Last number: " + remainder)
    //add it to the sum
    sum = sum + remainder * remainder * remainder;
    console.log("Sum: " + sum)
    //removing last digit from the number
    quo = Math.floor(quo / 10); //convert float into integer
    console.log("Our new number: " + temp)
}
//check the condition
if (sum == number) {
    console.log(number + " is an Armstrong number");
}
else {
    console.log(number + " is not an Armstrong number.");
}