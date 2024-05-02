const fs = require("fs");

// List of hardcoded users
const users = [
  { name: "anand", age: 22, gender: 0, city: "mumbai" },
  { name: "Bihu", age: 17, gender: 1, city: "pune" },
];

// Function to convert user details to the desired format
function formatUser(user) {
  return `${user.name} | ${user.age} | ${user.gender ? "Male" : "Female"} | ${
    user.city
  }`;
}

// Write user details to the file
const filePath = "users-info.txt";
const content = users.map(formatUser).join("\n");

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("User details written to users-info.txt");
  }
});
