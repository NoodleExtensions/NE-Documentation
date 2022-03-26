const fs = require('fs-extra');

console.log("Prelaunching.");

fs.removeSync("./src/pages");

const process = require('child_process');

process.exec("git clone https://github.com/NoodleExtensions/NE-Documentation ./src/pages/")
