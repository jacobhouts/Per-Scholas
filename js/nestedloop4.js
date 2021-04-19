let ccol=4;
let value=1;
let rrow=4;

for (let row = 1; row <= rrow; row++) {
    for (let column = 1; column <= ccol; column++) {
        process.stdout.write(value + ' | ');
    }
    value++
    console.log();
}