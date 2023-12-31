// script.js
// Array search program

// Create an array of even integers from 0 to 198
let array = Array.from({ length: 100 }, (_, index) => index * 2);

// Function to search for a value in the array
function searchValue() {
    let inputValue = document.getElementById('searchValue').value;
    let resultElement = document.getElementById('result');

    // Check if the input is a valid number
    if (isNaN(inputValue)) {
        resultElement.textContent = 'Please enter a valid number.';
        return;
    }

    // Convert the input value to a number
    let searchNumber = parseInt(inputValue);

    // Check if the number is in the array
    if (array.includes(searchNumber)) {
        resultElement.textContent = `Value ${searchNumber} found in the array.`;
    } else {
        resultElement.textContent = `Value ${searchNumber} not found in the array.`;
    }
}
