// 1. Write a function to greet a user by their name.

 function greet(name){
 return name;
 }result =greet("Bisma")
 console.log(result);

let userName=prompt("enter your name");
function greet (name){
return "hi " + name;
}result=greet(userName);
console.log(result);

// 2. Create a function that returns the square of a number.

function square(number){
return number*number;
}result=square(2,2);
console.log(result);

let userNumber=Number(prompt("enter nunber which you want square"));
function number(square){
return square*square;
}result=number(userNumber);
console.log(result);

// 3. Write a function that takes two numbers and returns the larger one.

let userFirstNumber = Number(prompt("enter your first number"));
let userSecondNumber = Number(prompt("enter your second number"));

function largerNumber(first, second) {
    if (first > second)
    {
        return first;
    }
 if (first < second){

    return second;
 }
} result=largerNumber(userFirstNumber, userSecondNumber);
console.log(result);


function largerNumber(a,b){
 if (a> b)
    {
        return a;
    }
 if (a < b){

    return b;
 }
}result=largerNumber(1,2);
console.log(result);


// 4. Create a function to calculate the area of a rectangle.

function rectangle(a,b){
return a*b;
}result =rectangle(1,2);
console.log(result);

let width=Number(prompt("Enter Width"));
let length=Number(prompt("Enter Length"));
function rectangle(W,L){
return W*L;
}result=rectangle(width,length);
console.log(result);

// 5. Write a function to check if a number is even or odd.

function chkNumber(number){
    if (number%2===0)
    return "Even";
  if (number%2!==0)
    return "Odd";
}result=chkNumber(3);
console.log(result);

let userInput=Number(prompt("enter number"));
function chk(a){
    if (userInput%2===0)
    return "Even";
  if (userInput%2!==0)
    return "Odd";
}result=chk(userInput);
console.log(result);

// 6. Convert a traditional function to an arrow function:
 function sayHi(name) {
 return "Hi " + name; }

// traditional function
function sayHi(name){
    return  "Hi" + name;
}result=sayHi("Bisma");
console.log(result);

const sayHi= name=>"Hi"+name;
console.log(sayHi("Bisma"));

// 11. Create a calculator object with methods: add, subtract, multiply, divide.

function calculator(a,b){
  return {
    add: a+b,
    minus: a-b,
    multiply: a*b,
    divide: a/b
  }
}result=calculator(1,2);
console.log(result);

function add(a,b){
 return a+b;
}result=add(1,2);
console.log(result);

function minus(a,b){
 return a-b;
}result=minus(1,2);
console.log(result);

function multiply(a,b){
 return a*b;
}result=multiply(1,2);
console.log(result);

function divide(a,b){
 return a/b;
}result=divide(1,2);
console.log(result);

let userFirstNumber = Number(prompt("Enter You First Number"));
let userSecondNumber = Number(prompt("Enter You Second Number"));
let userWant = prompt("What You Want");
function calculator(userFirstNumber, userSecondNumber) {
    if (userWant === "Add")
        return userFirstNumber + userSecondNumber;
    if (userWant === "Subtract")
        return userFirstNumber - userSecondNumber;
    if (userWant === "Multiply")
        return userFirstNumber * userSecondNumber;
    if (userWant === "divide")
        return userFirstNumber / userSecondNumber;
}const result=calculator(userFirstNumber, userSecondNumber);
console.log(result);


// 12. Write a function that takes a number and returns true if it’s prime.

let chkPrimeNumebr=Number(prompt("Enter Your Number"));
function primNumber(number){
    if (number<2)
        return "False"
    for(let i=0; i<=number;i++){
if(number%i==0){
    return "false"
}
    }

    return "False";
}result=primNumber(chkPrimeNumebr);
console.log(result);

// 13. Explain the difference between parameters and arguments with an example.

function add(a,b){  //paramters a,b
return a+b;
}result=add(1,2)  // Arguments 1,2 Also Function Calling
console.log(result) 

// 14. Write a function that prints numbers from 1 to n using a loop.

let userNumber=Number(prompt("enter number"));
function printUserNumber(number){
 for(let i=0; i<=number; i++)
    console.log(i);
}result=printUserNumber(userNumber);
console.log(result);

// 15. Challenge: Write a function that accepts a string and returns how many vowels it
// contains.

function countVowels(name) {
    let count = 0;
    for (let i = 0; i < name.length; i++){

        let letter = name[i];

        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
            ) {
            count++;
        }

    }
    return count;
} result = countVowels("Bisma");
console.log(result);

let userWord = prompt("Enter Word");
function countVowels(userWord) {
    let count = 0;
    for(let letter of userWord){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") 
     
    { count++;
    }
    return count;
} 
}
let result = countVowels(userWord);
console.log(result);