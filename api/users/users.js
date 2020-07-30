const { Router } = require('express')
const router = Router()
const consola = require('consola')
const users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }]
router.get('/users', (req, res) => {
  consola.log('api call')
  res.send(users)
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/get', (req, res) => {
  consola.log('get hello')
  res.send('hello Vien yeu <3')
})

module.exports = router
