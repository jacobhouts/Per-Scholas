/*for(let counter = 1; counter <=50000; counter ++ ){
    var date = new Date()
    var today = date.toDateString()
    var hour = date.getHours()
    var min = date.getMinutes()
    var second = date.getSeconds() 
    console.log(today + ' ' + hour + ':' + min + ':' + second)
} */

let counter= 1;
while (counter <=50000){
    var date = new Date()
    var today = date.toDateString()
    var hour = date.getHours()
    var min = date.getMinutes()
    var second = date.getSeconds() 
    console.log(today + ' ' + hour + ':' + min + ':' + second)
    counter ++
}