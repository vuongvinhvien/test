module.exports = {
  apps: [
    {
      name: 'nuxt',
      // exec_mode: 'cluster',
      instances: 'max',
      // instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
