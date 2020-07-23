const { Router } = require('express')

const { getTask, createTask } = require('./tasks.controller')

function tasksRouter(db) {
  const router = Router()

  router.get('/:id', getTask(db))

  router.post('/', createTask(db))

  return router
}

module.exports = tasksRouter
