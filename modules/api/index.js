module.exports = function (moduleOptions) {
  // Add middleware only with `nuxt dev` or `nuxt start`
  console.warn('create module ....middleware')
  if (this.options.dev || this.options._start) {
    console.warn('okkkkkkkkkkkkkk')
    console.warn([this.options.dev])
    // console.warn([this.options._env.NODE_ENV])
    console.warn([moduleOptions])
    // console.warn([this.options._start])
    // console.log([this.options])
    this.addServerMiddleware('~/api/')
  }
}
