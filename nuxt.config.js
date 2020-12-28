
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.BASE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2CB3FF' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/static/reset.css', },
    { src: '~/static/style.css', }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL|| 'http://api.duma.one/api'
  },
  /*
  ** Build configuration
  */
  build: {

    extend (config, ctx) {
      config.devtool = 'source-map'
    }
  },
  env: {
    baseURL: process.env.API_URL || 'http://localhost:80',
    baseTitle: process.env.BASE_TITLE || 'Duma.one',
  },
}
