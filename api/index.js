const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const { Router } = require('express')
const router = Router()
const consola = require('consola')

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js')
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }]
consola.info('server init: vien --------------------------------')
consola.info('server init: vien --------------------------------')
consola.info('server init: vien --------------------------------')

async function start() {
  const port = process.env.PORT || 3000
  const nuxt = new Nuxt(config)
  const { host } = nuxt.options.server
  consola.info([host])
  consola.info([port])
  // consola.info([config])
  // Build only in dev mode

  app.get('/users', (req, res) => {
    const x = 9
    consola.log('get called')
    res.send(`đã lấy được user ${x}`)
  })
  router.get('/get', (req, res) => {
    consola.log('get2t2tt')
    console.log('2')
    res.send('hello 2')
  })
  app.use(router)
  app.use(nuxt.render)
  if (config.dev) {
    const builder = new Builder(nuxt)
    consola.info('builder for dev')
    await builder.build()
    consola.info('Developer')
  } else {
    consola.info('is Production')
    await nuxt.ready()
  }
  app.listen(port, () =>
    console.log(`vuong vinh vien at http://${host}:${port}`)
  )
}
start()
module.exports = { path: '/api', handler: app }
