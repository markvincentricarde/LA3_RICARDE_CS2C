//If Else If with Conditional Ternary

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//prompt the user to input their score
let score = prompt("Please Enter your score: ");

//ternary
score>=97 ? console.log("1.00 Excellent"):
score>=94 && score>=96 ? console.log("1.25 Excellent"): 
score>=91 && score>=93 ? console.log("1.50 Above Average"):
score>=88 && score>=90 ? console.log("1.75 Above Average"):
score>=85 && score>=87 ? console.log("2.00 Average"):
score>=82 && score>=84 ? console.log("2.25 Average"):
score>=79 && score>=81 ? console.log("2.50 BelowAverage"):
score>=76 && score>=78 ? console.log("2.75 BelowAverage"):
score>=75 ? console.log("3.00 BelowAverage"):
score>=72 && score>=74 ? console.log("4.00 poor"):
console.log("5.00 poor");

console.log('Your equivalent grade is: ("grade")');