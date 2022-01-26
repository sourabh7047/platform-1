const colors = require('colors')
const cors = require('cors')
const environment = require('./helpers/environment.js')
const path = require('path')
const fs = require('fs')
const express = require('express')

environment()

const app = express()

app.use(cors())

app.use(express.json({ extended: false }))

let PORT

//serve static assets in prod
if (process.env.NODE_ENV === 'production') {
  PORT = process.env.SERVER_PORT

  //set static folder
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  PORT = 6000
}

app.listen(PORT, () => {
  console.log('---------------------------------------------'.gray)
  console.log(`Starting NFT Garage Platform Server`.cyan.underline + '\n')
  console.log(
    `${process.env.NODE_ENV.green} server running on port ${PORT}`.yellow.bold
  )
  console.log('---------------------------------------------'.gray)
})
