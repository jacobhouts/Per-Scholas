/*let row, col;

for(row=1; col<=5; col++) {
    for(col=row; col<=5; col++) {
        process.stdout.write(col.toString() + ' ');
    }
    console.log();
} */

/*
for (var i = 1; i <=5; i++) {
    for (var k = 1; k <= 1; k++) {
        Process.stdout.write(i.toString());
    }
    console.log();
} */


for (let i = 1; i <= 5; i++) {
    var value = 1;
    for (var j = 5; j >= i; j--) {
        process.stdout.write(value.toString());
        value++
    }
    console.log();
} 