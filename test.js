// JavaScript Program for a Simple Calculator

// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
        return null;
    } else {
        return num1 / num2;
    }
}

// Main function to operate the calculator
function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            console.log("Invalid operation");
            return null;
    }
}

// Example usage
console.log(calculator(5, 3, 'add')); // 8
console.log(calculator(5, 3, 'subtract')); // 2
console.log(calculator(5, 3, 'multiply')); // 15
console.log(calculator(5, 3, 'divide')); // 1.6666666666666667
console.log(calculator(5, 0, 'divide')); // Cannot divide by zero