const JSONC = require("jsonc-simple-parser");
const fs = require('fs')
module.exports = {
    build: {
        srcPath: './src',
        outputPath: './public',
        cleanURLs: true
    },
    site: {
        sidebar: JSONC.parse(fs.readFileSync("./src/pages/sidebar.jsonc", "utf-8"))
    }
};
