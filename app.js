const shortid = require('shortid')
const fs = require('fs')

const { writeToDB } = require('./helpers')

const file = fs.readFileSync('./db.json')
let DATA = JSON.parse(file.toString())
const argv = process.argv.slice(2)

switch (argv[0]) {
  case 'add':
    const newData = {
      _id: shortid.generate(),
      title: argv[1],
      content: argv[2],
      createdAt: new Date()
    }
    DATA.push(newData)
    writeToDB(DATA)
    console.dir(newData, { colors: true })
    break
  case 'list':
    console.dir(DATA, { colors: true })
    break
  case 'get':
    const _id = argv[1]
    if (_id) {
      console.dir(DATA.filter(data => data._id === _id), { colors: true })
    } else console.dir(DATA)
    break
  case 'edit':
    const id = argv[1]
    const newTitle = argv[2]
    const newContent = argv[3]
    DATA = DATA.filter(data => data._id !== id)
    const newNote = {
      _id: id,
      title: newTitle,
      content: newContent
    }
    DATA.push(newNote)
    writeToDB(DATA)
    console.dir(DATA, { colors: true })
    break
  default:
    console.log(`Don't know how to process this.`)
}
