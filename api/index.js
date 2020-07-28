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
  // consola.info([host])
  // consola.info([nuxt])
  // consola.info([config])
  // Build only in dev mode

  app.get('/users', (req, res) => {
    consola.log('get User')
    res.send('Đã lấy được users')
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
    await builder.build()
    consola.info('Develop')
  } else {
    consola.info('Production')
    await nuxt.ready()
  }
  // app.listen(port, () =>
  //   console.log(`Example app listening at http://localhost:${port}`)
  // )
}
start()
module.exports = { path: '/api', handler: app }
