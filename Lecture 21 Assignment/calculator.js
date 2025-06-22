// Task  Hands-On: Build a Simple Calculator

// Take input from user for number 1 
// Take input from user for number 2
// Take input from user for operate (+,-,*,/)



let age1 = prompt("Enter Your First Number");
let age2 = prompt("Enter Your Second Numebr");
let userWant = prompt("What You Want");
// let add = age1 + age2;
if (userWant === "add") {
    console.log( age1 + age2);
}
    else if(userWant==="subtract"){
        console.log( age1 - age2);
    }
     else if(userWant ==="multipy"){
        console.log( age1 * age2);
    }
     else if(userWant==="divide"){
        console.log( age1 / age2);
    }
     else if(userWant ==="exponent"){
        console.log( age1 ** age2);
    }
    else (console.log("Sorry Man"));


