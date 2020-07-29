const app = require('express')()
const consola = require('consola')
consola.info('server init: --------------------------------')
function start() {
  app.get('/users', (req, res) => {
    const x = 4
    consola.log('get called')
    res.send(`đã lấy được user ${x}`)
  })

  consola.info('listening')
}
start()
module.exports = { path: '/api', handler: app }
