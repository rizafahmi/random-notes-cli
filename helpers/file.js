const fs = require('fs')

const read = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, response) => {
      if (err) reject(err)
      resolve(JSON.parse(response))
    })
  })
}
const save = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(data), (err, response) => {
      if (err) reject(err)
      resolve(response)
    })
  })
}

module.exports = { save, read }
