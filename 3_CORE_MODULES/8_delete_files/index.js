const fs = require('fs')

fs.unlink('archive.txt', (err) => {

  if (err) {
    return console.log(err);
  }

  console.log("File Deleted!");
})