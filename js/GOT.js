const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'


for (let i in firstNames){
	console.log(firstNames[i])
}
 for (j=0; j< lastNames.length; j++){
	 console.log(lastNames[j])
 }
	for (k= 0; k< places.legth; k++){
		console.log(places[k])
bios.push("My name is " + firstNames[i] + lastNames[j] + " and I am from " + places[k]);
}

console.log(firstNames[i]);