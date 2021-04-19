let value = 1;
let TRow=6;
let TCol=6;
for(let row =1; row<= TRow; row++){
    for(let col=1; col<=TCol; col++){
        process.stdout.write(value.toString() + " ");
        value++;
    }
    console.log()
}