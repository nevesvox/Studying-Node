const fs = require('fs')

fs.rename("archive.txt", "newArchive.txt", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Archive renamed with success!`);
})