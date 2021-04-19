let num = [3, 1, 5, 9, 2, 4];
console.log();
console.log();
for (let i = 0; i < num.length - 1; i++) {
  console.log("---------");
  console.log("outer " + i + " (value: " + num[i] + ")");
  console.log(num);
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] > num[j]) {
      let swap;
      swap = num[i];
      num[i] = num[j];
      num[j] = swap;
      console.log("inner " + j + " (" + num[j] + " with " + num[i] + ")");
      console.log(num);
    }
  }
  console.log("---------");
  console.log();
  console.log();
}