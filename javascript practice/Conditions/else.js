// Operators
// Home Work
// = equal to value assignment
// == equal to 9 == 9 == "9"
// === equal to 9 === 9 !== "9"  and of the same type
// 9 !== "9" === "9"


// conditions 
// > greater
//  < less then 
// <=  less then or equal to
// >= greater then or equal to
// &  
// &&   both must be true
// // ||   one must be true
// let firstAge=7;
// let secondAge=18;
// if(firstAge==7){
// console.log("You can enter")
// }

// let candidateA= "GradeA";
// let candidateB= "B";
// if(candidateA=="GradeA"){
//     console.log("This candidate scores A grade");
//     }
//     else{
//         console.log("The Candidate B Grade");
//     }



// let age1=10;
// let age2=20;
// if(age1==30 )
// {
//     console.log("You are under 10");
// }
// else if (age2==40){
//   console.log("You are 18+");
// }
// else{
//     console.log("Please Enter");
// }
// 
// let a=10;
// let b =20;
// if (a==10 && b==20)
// {
//     console.log("Good");
// }








// asignment 
// Q:1 mark sheet 
// 80-100 A
// 70-79 B
// 60-69 C
// 50-59 D
// 0-49 F

let A = 100;    // If A=101 Then 1 Condition False
let a = 80;
let B = 79;    // If B=80 Then 2 Condition False
let b = 70;
let C = 69;    // If C=70 Then 3 Condition False
let c = 60;
let D = 59;    // If D=60 Then 4 Condition False
let d = 50;  // If d=60 Then 5 Condition False
let F = 49;
let f = 0;
if (A <= 100 && a >= 80) {
    console.log("Grade A");
}
else if (B <= 79 && b >= 70) {
    console.log("Grade B");
}
else if (C <= 69 && b >= 60) {
    console.log("Grade C");
}
else if (D <= 59 && d >= 50) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}
// conditions
// > greater
//  < less then
// <=  less then or equal to
// >= greater then or equal to

// Q :2 use this keyword in javascript
// Home Work
// = equal to value assignment
// == equal to 9 == 9 == "9"
// === equal to 9 === 9 !== "9"  and of the same type
// 9 !== "9" === "9"

let myName = "Bisma";
console.log(myName);

let userFirstName = "22";
let userAge = 22;
console.log(userFirstName == userAge);


let firstStudentAge = "22";
let secondStudentAge = 22;
console.log(firstStudentAge === secondStudentAge);



// Q3: Build a Bar Age Matching System 
// 18+ allow
// 18-25: alcoholic item allow
// 26-40: alcoholic item allow + Dance floor allow
// conditions
// > greater
//  < less then
// <=  less then or equal to
// >= greater then or equal to
// // let younger = 18;
// let adultYonger = 25;
// // let adult = 40;
// if (younger>= 18) {
//     console.log("Allow");
// }
// else if (adultYonger <= 25) {

//     console.log("alcoholic item allow");

// }
// let younger = 18;    
// let adultYounger = 18;
// let AdultYounger = 25;    
// let adult = 25;
// let Adult = 45;   

// if (A <= 18) {
//     console.log("Allow");
// }
// else if (adultYounger <= 18 && AdultYounger >= 25) {
//   console.log("alcoholic item allow");
//  }
// else if (adult <= 25 && b >= 45) {
//     console.log("alcoholic item allow + Dance floor allow");
//  }

let younger = 18;
let adultYounger = 18;
let AdultYounger = 25;
let adult = 26;
let Adult = 45;

if (younger >= 18) {
    console.log("Allow");
    if (adultYounger >= 18 && AdultYounger <= 25) {
        console.log("alcoholic item allow ");
    }
 else if(adult >= 26 && Adult <= 45){
    console.log("alcoholic item allow + Dance floor allow");
    }
}
else {
    console.log("Not Allowed");
} 

