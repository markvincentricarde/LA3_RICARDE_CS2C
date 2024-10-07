//Interation Mapping with Double Loops

//this function allows a prompt
const ps = require("prompt-sync");
const prompt =ps();

//prompt the user to  input the Max Limit of the loop
const Limit = prompt("Enter the Maximum Limit: ");

let i = 0;
let a = 0;

//double loop
for (let i=0;i<=Limit;i++){
    for(let a=0;i<=Limit;a++)
    {

let addvalue = i + a;
console.log('[${i}][${a}]the added value is: ${addedvalue}');
    }
}