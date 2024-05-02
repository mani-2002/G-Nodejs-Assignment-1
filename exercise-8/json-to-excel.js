const xlsx = require('xlsx');

// Sample JSON data
const jsonData = [
    {'name':'anand','age':22,'gender':0,'city':'mumbai'},
    {'name':'Bihu','age':17,'gender':1,'city':'pune'}
];

// Create a new workbook and add a worksheet
const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(jsonData);

// Add the worksheet to the workbook
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
xlsx.writeFile(workbook, './output.xlsx');
