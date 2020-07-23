const { Router } = require('express')

const { getTask } = require('./tasks.controller')

function tasksRouter(db) {
  const router = Router()

  router.get('/:id', getTask(db))

  return router
}

module.exports = tasksRouter
