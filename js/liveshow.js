/* 21 and up get free drink and ticket
18-20 get ticket only
1-17 get to go home */

age=21;

if (age <= 20) {
    if (age >= 1 && age <= 17) {    
        console.log(age + "- go home!")
    }else if (age >=18 && age <=20) {
        console.log(age + "- enjoy the show!") 
    }
}
else {
    console.log("- go get drunk at the show!")
}