const fs = require("fs");
const path = require("path");

const filesToModify = [
    "CMakeLists.txt",
    "package.json",
    "src/CMakeLists.txt",
    ".vscode/launch.json"
];

function configureProject(gameName, gameDirectory) {
    for (const fileToModify of filesToModify) {
        const filePath = path.join(gameDirectory, fileToModify);

        const fileContents = fs.readFileSync(filePath, {encoding: "utf-8"});
        const replacedText = fileContents.replaceAll("starter", gameName);

        fs.writeFileSync(filePath, replacedText);
    }
}

if (require.main === module) {
    configureProject(process.argv[2], process.argv[3]);
}

module.exports = configureProject;