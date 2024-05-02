const fs = require('fs');

// Generate a random alphanumeric string with a specified length
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// Generate 100 random words with 10 characters each
const randomWords = Array.from({ length: 100 }, () => generateRandomString(10));

// Write the random words to a file
const filePath = 'random-words.txt';
const content = randomWords.join('\n');

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully:', filePath);
    }
});