const fs = require("fs")


validFolder();


function validFolder() {
  if (!fs.existsSync('./myFolder')) {
    console.log("Folder not exist!");
    // Create folder
    fs.mkdirSync("myFolder")
  } else {
    console.log("Folder exist!");
  }
}