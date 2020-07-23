const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const taskRouter = require('./tasks/tasks.router')

function server(db) {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/', (req, res) => res.status(200).send('<p>Endpoints:</p><p>POST /tasks,</p><p>GET /tasks/:id</p>'))
  app.use('/tasks', taskRouter(db))

  app.use((err, req, res, next) => {
    console.log(err) // log the err ;)

    res
      .status(500)
      .json({ status: 'error', result: 'Encountered an unexpected error.' })
  })

  return app
}

module.exports = server
