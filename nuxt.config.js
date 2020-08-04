import axios from 'axios'

export default {
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
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'RocMark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'config', name: 'config', content: "Welcome to RocMark's Site" }
    ],
    link: [
      // '/' 指向 /static
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.js' }
    ]
  },
  /*
  ** Global CSS
  css: ['~/assets/main.css'], // use pure css file
  */
  css: [
    // '~/assets/scss/_base.scss'
    './assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/scss/main.scss'
      // './assets/scss/*.scss'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap' // 必須放在最下面
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.VUE_APP_API_BASE_URL || ''
  },
  /*
  ** sitemap module configuration
  ** See https://www.npmjs.com/package/@nuxtjs/sitemap
  */
  sitemap: {
    hostname: 'https://rocmark.online',
    gzip: true,
    exclude: [
      '/admin',
      '/admin/**', // 只包含子路徑
      '/account',
      '/account/**'
    ]
    // 只有靜態網站、分頁少的才會用陣列自行撰寫
    // routes: [{ url: '/page/3', changefreq: 'daily', priority: 1, lastmod: '2017-06-30T13:30:00.000Z' }]
    // routes: async () => {
    //   const baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api'
    //   const request = axios.create({ baseURL })
    //   const { data: resData } = await request.get('/videos')
    //   return resData.data.map((el) => { return `/watch/${el.id}` })
    // }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  server: {
    port: 3001
  }
}
