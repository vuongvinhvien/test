// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    URL: process.env.URL,
  },
  server: {
    // host: '113.23.17.119',
    port: 50184, // default: 3000
    // host: '0.0.0.0', // default: localhost
  },
  /*
   ** watch file
   ** See https://nuxtjs.org/api/configuration-watch/
   */
  watch: ['~/api/*.js'],
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css'],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeEnter(el) {
      console.log('Before enter...')
    },
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/antd-ui'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  dev: process.env.NODE_ENV !== 'production',
  serverMiddleware: [
    // '~/api/index.js',
    { path: '/api/', handler: '~/api/index.js' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '~/modules/api',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },

  /*
   **  Customising the Progress Bar
   ** See https://nuxtjs.org/guides/features/loading#customising-the-progress-bar
   */

  loading: {
    color: 'DimGrey',
    height: '1px',
    continuous: true,
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  /*
   **  check by eslint on save
   ** See https://nuxtjs.org/guide/development-tools#eslint-and-prettier
   */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }
    },
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './**/*.{ts,js,vue}',
  //     },
  //   },
  // },
}
