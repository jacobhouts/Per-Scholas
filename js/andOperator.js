var ranking = 84;
var grade;

if(ranking<=100 && ranking >= 91) {
    grade = "A";
} else if (ranking<=90 && ranking >= 81) {
    grade = "B";
} else if (ranking<=80 && ranking >= 71) {
    grade = "B-";
} else if (ranking<=70 && ranking >= 61) {
    grade = "C";
} else {
grade = "really?";
}

console.log(grade);