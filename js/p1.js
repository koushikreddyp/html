/*-----

function exampleFunction() {
    if (true) {
        let functionScopedvar = "I am function-scoped";
        console.log(functionScopedvar);
    }
    console.log(functionScopedvar);
}
exampleFunction();
-----*/

/*------
let shadowedVar = "I am Global";

function exampleFunction() {
    let shadowedVar = "I am Local";
    console.log(shadowedVar);
}
exampleFunction();
console.log(shadowedVar);
------*/

/*---
hello();

function hello() {
    console.log("Hello World!");
}
-----*/

//let exampleVar = null;
//console.log(typeof(exampleVar));

/*let person = {
    name: "Alice",
    age: 30,
    isStudent : false
};

console.log(person.name);*/

/*for (let i = 0;i < 5; i++){
    console.log(i);
}*/

/*
let count = 0;
while(count < 5) {
    console.log(count);
    count++;
}
*/

/*
let count =0;
do {
    console.log(count);
    count++;
} while (count < 5);
*/

/*
let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

for (let key in person){
    console.log(key + ": "+ person[key]);
}
*/

/*
let car = {
    make: "Toyato",
    model: "Camry",
    year: 2022,
    isElectric: false,
    start: function(){
        console.log("Engine started!");
    }
};

console.log(car.make);
console.log(car.year);
car.start();

*/

/*
function Book(title, author, year) 
{
    this.title = title;
    this.author = author;
    this.year = year;
    console.log(title , author , year);
}

let book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
*/

/*
let fruits = ["Apple", "Banana", "Orange", "Grape"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("Kiwi");//Adding Elements to the END
console.log(fruits);

fruits.unshift("Mango");//Adding Elements to the BEGINNING
console.log(fruits);

let removedLast = fruits.pop();//Removing the LAST Element
console.log(fruits);

let removedFirst = fruits.shift();//Removing the FIRST Element
console.log(fruits);

let indexOfOrange = fruits.indexOf("Orange");//Finding the index of an element
console.log(indexOfOrange);

for (let i=0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

let citrus = fruits.slice(1, 3);
console.log(citrus);
console.log(fruits);

let removed = fruits.splice(1, 2, "pear", "melon");

let moreFruits = ["Grapefruits", "Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

console.log();
*/

const multiply = function(a, b)
{
    return a * b;
};
const product = multiply(4, 6);
console.log('Function Expression - Product:', product);

const subtract = (a, b) => a- b;
const difference = subtract(8, 3);
console.log('Arrow Function - Difference:', difference);