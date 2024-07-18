// Array of objects mapping Arabic values to their corresponding Roman numerals
const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

// Function to convert Arabic numbers to Roman numerals
function arabicToRoman(num) {
    // Check if the input number is less than or equal to 0
    if (num <= 0) {
        return 'Please enter a number greater than or equal to 1';
    }
    // Check if the input number is greater than or equal to 4000
    if (num >= 4000) {
        return 'Please enter a number less than or equal to 3999';
    }

    // Initialize an empty string to store the result
    let result = '';
    // Iterate through the romanNumerals array
    for (const { value, numeral } of romanNumerals) {
        // Append the corresponding Roman numeral to the result string
        // while subtracting the value from the input number
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    // Return the final Roman numeral string
    return result;
}

// Add an event listener to the "Convert" button
document.getElementById('convert-btn').addEventListener('click', () => {
    // Get the value from the input field with ID 'number'
    const numberInput = document.getElementById('number').value;
    // Get the div element with ID 'output' to display the result
    const outputDiv = document.getElementById('output');
    
    // Check if the input field is empty
    if (!numberInput) {
        outputDiv.textContent = 'Please enter a valid number';
        return;
    }

    // Convert the input value to an integer
    const number = parseInt(numberInput);
    // Call the arabicToRoman function to get the Roman numeral
    const result = arabicToRoman(number);
    // Display the result in the output div
    outputDiv.textContent = result;
});
