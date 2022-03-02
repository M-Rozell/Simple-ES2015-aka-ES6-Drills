// function favMovie(movie, name) {
//     //console.log(`my favorite movie is ${movie}`);
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }
// favMovie('the room', 'tommy wiseau');

//Arrow Functions
// let favMovie = (movie, name) => {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }
// favMovie("the room", "tommy wiseau")

//5. 6.
favMovie = (movie, name) => { console.log(`my name is ${name} and my favorite movie is ${movie}`); }
favMovie("the room", "tommy wiseau")

let getFirstName = (fullName) => { console.log(fullName.split(' ')[0]) }

let getFirstNameConcise = fullName => console.log(fullName.split(' ')[0])

getFirstName("maggie rozell")
getFirstNameConcise("maggie rozell")

//10.
let doMath = (x, y) => {
    let exponent = x ^ y;
    let product = x * y
    console.log(`${exponent}`)
    console.log(`${product}`)
    return { exponent, product }
}

let math = doMath(8, 2);
console.log(math)

//Spread Syntax

let things = (name, location, favFood) => {
    console.log(`My name is ${name}, I am from ${location}, and my favorite food is ${favFood}.`)
   
}
let arr = ["Paul", "Birmingham", "Kimchi"];
things(...arr);

//4.
let myName = "maggie karen rozell"
let whatever = (a) => {
    let b = [...a];

for (let i = 0; i < b.length; i++) {
        console.log(b[i])
    }
}
whatever(myName)





