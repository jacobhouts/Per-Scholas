var greeting;
var date= new Date()
var hour= date.getHours()
var minutes= date.getMinutes()
var seconds= date.getSeconds()
console.log(minutes);
console.log(seconds);

if(hour>5&&hour<12) {
    console.log("good morning, Jacob!");
}
else if(hour>12&&hour<=16) {
    console.log("good afternoon, Jacob!");
}
else{
    console.log('Howdy, Jacob!');
}

console.log(greeting)
console.log(date)



if(hour>5&&hour<12) {
    console.log("good morning, Jacob!");
}
else if(hour>12&&hour<=16) {
    console.log("good afternoon, Jacob!");
}
else{
    console.log('Howdy, Jacob!');
}

console.log(greeting)
console.log(date)