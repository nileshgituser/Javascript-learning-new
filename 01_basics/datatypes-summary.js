//premitive 
//7 types: string, number, boolean, null,undefined,symol, BigInt

const score =100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber =356778761567575n



//Reference type(non primitive)

//array , objects , function(web object ,web events imortant)

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"nilesh",
    age: 32,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);
