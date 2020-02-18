
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vuecommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@vuecommerce/ui/dist/css-reset.css',
    '@vuecommerce/ui/dist/vuecommerce-ui.css'
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@vuecommerce/ui/nuxt',
    '@vuecommerce/data-source/dist/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: [
      '@vuecommerce/data-source',
    ],
  },
  vueFrontDataSource: {
    apolloClientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.myshopify.com/api/2019-07/graphql.json',
        httpLinkOptions: {
          credentials: 'same-origin',
          headers: {
            'x-shopify-storefront-access-token': 'ecdc7f91ed0970e733268535c828fbbe'
          },
        },
      },
    },
  },
}
