const getTask = (db) => async (req, res, next) => {
  try {
    if (!isNaN(req.param.id)) {
      throw new Error('Param "id" is not a number')
    }
    const task = await db.query('SELECT * FROM tasks WHERE id = $1', [parseInt(req.params.id)])

    if (!task) {
      return res.status(404).json({ status: 'error', result: 'Task does not exist' })
    }
    return res.status(200).json({ status: 'ok', result: task })
  } catch (error) {
    next(error)
  }
}

module.exports = { getTask }
