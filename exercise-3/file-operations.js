const fs = require('fs');

const copyFile = (sourceFile, newFile) => {
    fs.copyFile(sourceFile, newFile, (err) => {
        if (err) {
            console.log('Error copying file:');
        } else {
            console.log(`File "${sourceFile}" copied to "${newFile}"`);
        }
    });
}

const sourceFile = "../exercise-1/lib/readme.txt";
const newFile = "../exercise-3/copiedFile.txt";
copyFile(sourceFile, newFile);