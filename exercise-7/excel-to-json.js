const xlsx = require('xlsx');

// Load the workbook
const workbook = xlsx.readFile('./marks.xls');

// Get the first sheet
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the sheet data to JSON
const jsonData = xlsx.utils.sheet_to_json(sheet);

console.log(JSON.stringify(jsonData, null, 2));
