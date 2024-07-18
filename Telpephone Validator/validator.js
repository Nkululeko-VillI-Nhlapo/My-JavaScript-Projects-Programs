// Add event listeners to buttons for click events
document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

// Function to validate the phone number
function validatePhoneNumber() {
    // Get the user input and the results div
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    // Clear any previous results
    resultsDiv.textContent = '';

    // Check if the input is empty and alert the user if it is
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    // Define valid patterns for South African phone numbers
    const validPatterns = [
        /^0\d{2} \d{3} \d{4}$/,  // Local and Mobile numbers: 0XX XXX XXXX
        /^\+27 \d{2} \d{3} \d{4}$/  // International format: +27 XX XXX XXXX
    ];

    // Check if the input matches any of the valid patterns
    const isValid = validPatterns.some(pattern => pattern.test(userInput));

    // Update the results div with the appropriate message and class based on validity
    if (isValid) {
        resultsDiv.textContent = `Valid SA number: ${userInput}`;
        resultsDiv.className = 'valid';  // Add 'valid' class for styling
    } else {
        resultsDiv.textContent = `Invalid SA number: ${userInput}`;
        resultsDiv.className = 'invalid';  // Add 'invalid' class for styling
    }
}

// Function to clear the results div
function clearResults() {
    const resultsDiv = document.getElementById('results-div');
    resultsDiv.textContent = '';  // Clear the text content
    resultsDiv.className = '';  // Remove any classes
}

