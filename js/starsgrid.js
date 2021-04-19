let value = '*';
for(let row = 1; row <= 6; row++) {
    for (let column = 1; column <= 6; column++)
    {
        process.stdout.write(value + ' ');
    }
    console.log();
}