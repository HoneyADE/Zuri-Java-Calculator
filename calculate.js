// Constant for Number1
const number1 = parseFloat(prompt("Enter Number 1: "));
// Constant for Number2
const number2 = parseFloat(prompt("Enter Number 2: "));

// Constant for the Operators
const operator = prompt("Enter operator(+, -, *, /)");
// Conditions
let answer;
if (isNaN(number1) || isNaN(number2)) {
    alert("Invalid Input!\nPlease,click the blue button to reload the page")
}
else{
    if (operator == "+") {
        answer = number1 + number2;
    }
    else if (operator == "-") {
        answer = number1 - number2;
    }
    else if (operator == "*") {
        answer = number1 * number2;
    }
    else {
        answer = number1 / number2;
    }
}
// The Alert Box containing the answer to the correct arithmetic input
alert(number1+operator+number2+"=" + answer);
