//fibonacci series: 0,1,1,2,3,5,8,13,21,34,55,89//

let num1 = 0;
let num2 = 1;
let next;
for (let i = 1; i < 10; i++) {
    next = num1 + num2
    console.log(next)
    num1 = num2;
    num2 = next;
}