//booking a practice space for you or your group based on your instrument

let practiceSpace = "le garage" 
let roomNum = "44, the big one!"  
let room = roomNum.splice(0,3)
let loadingDock1 = "15 minute parking only"
let loadingDock2 = "closed"
let drumMessage = "bring the drums here!"
let GuitMessage = "bring the guitars here"
let voxMessage = "sing here (leave the ego)"
let bassMessage = "bring on the bass over here"
let synthMessage = "you're too smart for this band, keys!"
let soundMessage = "grab a beer, you deserve it "
let message
let dock

for (let counter = 0; counter<=roomNum; counter++)
{
    for(let counter =0; counter<=PracticeSpace; counter++)
    {
        if(PracticeSpace%2==0){
            parking = loadingDock1.toUpperCase()
            }
            else {
            parking = loadingDock2.toLowerCase()
            }      
    }
    if(room>=1 && room<=10) {
        message = Drummessage.replace(/drums/gi, "noise")
    }
    else if(room>=11 && room<=20){
        message = Guitmessage.toUpperCase
    }
    else if(room>=21 && room<= 30){
        message = voxMessage.replace("sing", "scream")
    }
    else if(room>=31 && room <=40){
        message = bassMessage.padStart(bassMessage.length+10, "*") 
    }    
    else if(room>=41 && room<=50){    
        message = synthMessage.padEnd(synthMessage.length+20, "*")
    }   
    else{
    message = soundMessage.toUpperCase
    }
}

console.log("Your practice space is: "+ practiceSpace.concat("  " + fZip.padEnd(fZip.length+5," ")))
console.log("what your instrument says about you: " + message + " | "+ practiceSpace)