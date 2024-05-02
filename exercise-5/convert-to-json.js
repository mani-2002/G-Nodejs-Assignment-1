const fs = require('fs');

function readFileAndConvertToJson(filename) {
    const content = fs.readFileSync(filename, 'utf-8');
    const lines = content.split('\n');
    const data = [];

    lines.forEach(line => {
        const [name, age, gender, city] = line.split(' | ');
        data.push({ name, age, gender, city: city.trim() }); // Use trim() to remove whitespace characters
    });

    return data;
}

const jsonData = readFileAndConvertToJson('data.txt');
console.log(JSON.stringify(jsonData, null, 2));
