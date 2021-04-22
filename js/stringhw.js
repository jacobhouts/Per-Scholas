//finding a practice space near you for your instrument of choice

let practiceSpace = "923 julie ln" 
let fZip = "33813-123" 
let shZip = fZip.splice(5)
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

for (let counter = 0; counter<=fZip; counter++)
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
    if(fZip>=10000 && fZip<=19999) {
        message = Drummessage.replace(/drums/gi, "noise")
    }
    else if(fZip>=20000 && fZip<=29999){
        message = Guitmessage.toUpperCase
    }
    else if(fZip>=30000 && fZip<= 39999){
        message = voxMessage.replace("sing", "scream")
    }
    else if(fZip>=40000 && zip <=49999){
        message = bassMessage.padStart(bassMessage.length+10, "*") 
    }    
    else if(zip>=50000 && zip<=59999){    
        message = synthMessage.padEnd(synthMessage.length+20, "*")
    }   
    else{
    message = soundMessage.toUpperCase
    }
}

console.log("Your practice space is: "+ practiceSpace.concat("  " + fZip.padEnd(fZip.length+5," ")))
console.log("what your instrument says about you: " + message + " | "+ practiceSpace)
