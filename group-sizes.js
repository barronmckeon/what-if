const prompt = require('prompt-sync')();

let num = Number(prompt('Please enter a class size'));
let groups = num / 3;
let remaindergroup = num % 3
remainder_sizes=remaindergroup



/*()
if (num < 10){
    console.log("Your number is less than 10");
} else if (num > 10) {
    console.log("Your number is greater than 10");
} else {
    console.log("Your number is equal to 10");
}