const fs = require('fs')

const writeToDB = data => {
  console.log('helpers:4', data)
  return new Promise((resolve, reject) => {
    fs.writeFile('./db.json', JSON.stringify(data), (err, response) => {
      if (err) reject(err)
      resolve(response)
    })
  })
}

module.exports = { writeToDB }
