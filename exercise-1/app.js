const fs = require('fs');
const path = require('path');

function getFileContent(filename) {
    const filePath = path.join(__dirname, 'lib', filename);
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

const readmeContent = getFileContent('readme.txt');
const studentsContent = getFileContent('students.csv');
const indexContent = getFileContent('index.html');

console.log('Readme Content:', readmeContent);
console.log('Students Content:', studentsContent);
console.log('Index Content:', indexContent);
