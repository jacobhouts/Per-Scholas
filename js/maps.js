let myStudents = new Map();

myStudents.set('leo', 44)
myStudents.set('raph', 88)
myStudents.set('mikey', 18)
myStudents.set('don', 99)
myStudents.set('robin', 77)
myStudents.set('cyborg', 91)
myStudents.set('starfire', 33)
myStudents.set('raven', 88)
myStudents.set('beastBoy', 13)
myStudents.set('curiousGeorge', 25)

console.log(myStudents.size);
console.log(myStudents.has('curiousGeorge'));
console.log(myStudents.delete('curiousGeorge'));
console.log(myStudents.has('curiousGeorge'));
console.log(myStudents.size)
