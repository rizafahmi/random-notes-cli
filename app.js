'use strict'

const shortid = require('shortid')
const fs = require('fs')

const File = require('./helpers/file')

async function main () {
  let data = await File.read('./db.json')
  const argv = process.argv.slice(2)

  switch (argv[0]) {
    case 'add':
      let newNote = {
        _id: shortid.generate(),
        title: argv[1],
        content: argv[2],
        createdAt: new Date()
      }

      data.push(newNote)
      console.dir(newNote, { colors: true })
      try {
        await File.save('./db.json', data)
      } catch (error) {
        console.error(error)
      }
      break
    case 'list':
      console.dir(data, { colors: true })
      break
    case 'get':
      const _id = argv[1]
      if (_id) {
        console.dir(data.filter(data => data._id === _id), { colors: true })
      } else console.dir(data)
      break
    case 'count':
      console.log(data.length)
      break
    case 'edit':
      let id = argv[1]
      const newTitle = argv[2]
      const newContent = argv[3]
      const oldData = data.filter(data => data._id === id)
      let newData = data.filter(data => data._id !== id)
      newData.push({
        _id: id,
        title: newTitle,
        content: newContent,
        createdAt: oldData[0].createdAt,
        updatedAt: new Date()
      })
      console.dir(newData, { colors: true })
      File.save('./db.json', newData)
      break
    case 'remove':
      const deleteId = argv[1]
      const cleanData = data.filter(data => data._id !== deleteId)
      console.dir(cleanData, { colors: true })
      File.save('./db.json', cleanData)
      break

    default:
      console.log(`Don't know how to process this.`)
  }
}

main()
