alert('you want to check weather your number is even or not');
const number = prompt("Enter a number: ");
confirm("check that you have enter right number")
//check if the number is even/odd

if(number % 2 == 0) {
    console.log(number,"This number is even.");
}
else {
    console.log(number,"This number is odd.");
}

const num = prompt("Enter another number to check for even/odd: ");

// ternary operator
const result = (num % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}. getting this result by using ternary operator`);
