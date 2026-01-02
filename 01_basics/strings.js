const gameName = new String('Suresh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherStrig =gameName.slice(-8, 4)
console.log(anotherStrig)

const newStringOne = "Nilesh "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://nilesh.com/nilesh%20jondhale"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
