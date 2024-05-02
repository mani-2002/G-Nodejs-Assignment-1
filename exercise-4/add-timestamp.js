const fs = require("fs");

function addTimestamps(filename) {
  const timestampedLines = fs
    .readFileSync(filename, "utf-8")
    .split("\n")
    .map((line) => {
      const now = new Date();
      const timestamp = now.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      return `${timestamp} ${line}`;
    });

  fs.writeFileSync(filename, timestampedLines.join("\n"));
}

addTimestamps("debug.log");
console.log("Timestamps added successfully to debug.log");
