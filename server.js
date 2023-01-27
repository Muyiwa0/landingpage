const express = require('express')
const cookieParser = require('cookie-parser')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const sslRedirect = (environments = ['production'], status = 302) => {
  const currentEnv = process.env.NODE_ENV
  const isCurrentEnv = environments.includes(currentEnv)
  return (req, res, next) => {
    if (isCurrentEnv && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(status, 'https://' + req.hostname + req.originalUrl)
    } else {
      next()
    }
  }
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(express.json())
    server.use(express.urlencoded({ extended: true }))
    server.use(cookieParser())

    server.use(sslRedirect())

    server.get('*', (req, res) => handle(req, res))

    server.post('/api/auth/*', (req, res) => handle(req, res))

    server.listen(port, (error) => {
      if (error) throw error
      console.log(`Listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
