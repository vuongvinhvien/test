/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const consola = require('consola')
const config = require('../nuxt.config.js')
const users = require('./users/users')
// We instantiate Nuxt.js with the options
consola.info('server init: ------------- -------------------')

async function start() {
  // const port = process.env.PORT || 3000

  const nuxt = new Nuxt(config)
  const { port } = nuxt.options.server
  const { host } = nuxt.options.server
  consola.info(`${host} : ${port}`)

  app.use(users)
  app.use(nuxt.render)
  consola.info(`is dev ${config.dev}`)
  if (config.dev) {
    consola.info('builder for dev')
    const builder = new Builder(nuxt)
    await builder.build()
    consola.info('Developeredd')
  } else {
    consola.info('is Production')

    await nuxt.ready()
  }
  consola.info(`WELECOM BACK http://${host}:${port}`)
  // app.listen(port, () =>
  //   consola.log(`vuong vinh vien at http://${host}:${port}`)
  // )
}
start()
module.exports = { path: '/api', handler: app }
