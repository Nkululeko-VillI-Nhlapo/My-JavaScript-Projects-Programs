
function isPalindrome(str) {
    // remove all non alphanumeric characters and convert to lower case
    const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

    //reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    //Check if the cleaned string is equal to it's reverse
    return cleanedStr === reversedStr;
}
// Add an event listener to the check button that listens for click events
document.getElementById('check-btn').addEventListener('click', () => {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const inputStr = inputElement.value.trim();

    if (inputStr === '') {
        alert('Please input a value');
        return;
    }

    const isPalin = isPalindrome(inputStr);
    resultElement.textContent = `"${inputStr}" is ${isPalin ? '' : 'not '}a palindrome`;
});
