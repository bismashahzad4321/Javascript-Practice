// Task  Hands-On: Build a Simple Calculator

// Take input from user for number 1 
// Take input from user for number 2
// Take input from user for operate (+,-,*,/)



let age1 = prompt("Enter Your First Number");
let age2 = prompt("Enter Your Second Numebr");
let userWant = prompt("What You Want");
// age1 = Number(prompt("Enter Your First Number"));
// age2 = Number(prompt("Enter Your Second Number"));
// let userAdd = Number(age1 + age2);
let userAdd1=Number(age1);
let userAdd2=Number(age2);
addition=userAdd1+userAdd2;
if (userWant === "add") {
    console.log(addition);
}
else if (userWant === "subtract") {
    console.log(age1 - age2);
}
else if (userWant === "multipy") {
    console.log(age1 * age2);
}
else if (userWant === "divide") {
    console.log(age1 / age2);
}
else if (userWant === "exponent") {
    console.log(age1 ** age2);
}
else (console.log("Sorry Man"));


let str="123";
console.log(typeof(str));
let strtonumber=Number(str);
console.log(strtonumber);