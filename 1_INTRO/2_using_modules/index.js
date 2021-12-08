const fs = require('fs')


fs.readFile('archive.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data)
    console.log(data.split(';'))
    let formatedArray = []

    // Sanetiza array
    data.split(';').forEach(el => {
      formatedArray.push(el.replace('\r', '').replace('\n', ''))
    })

    console.log(formatedArray)
  }
})