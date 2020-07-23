require('dotenv').config()
const { Client } = require('pg')
const serverBuilder = require('./server')

async function bootstrap() {
  const port = parseInt(process.env.NODE_ENV || '8080')

  const db = new Client()
  await db.connect()

  const listener = serverBuilder(db)
  await listener.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })

  process.on('exit', async () => {
    await db.end()
  })
}

bootstrap()
