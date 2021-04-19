//let value = "#" ;
for (let i = 1; i <= 6; i++) {
    //let value = '#';
    for (let j = 6; j >= i; j--) {
        process.stdout.write(value + " ");
        value++
    }
    console.log();
}