let value=1;
for(var row = 1; row<= 4; row++){
    for(let col = 1; col <=4; col++){
        //console.log(value ++)
        Process.stdout.write(value.toString());
        value++;
    }
    console.log(); //will bring line down to next row
}