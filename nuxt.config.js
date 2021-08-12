export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tiger-digital',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'Tiger digital agence digital', 
        content: 'Booster votre business grâce au Marketing Digital'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo-2.png' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/6f447f0190.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
      [
        'nuxt-sass-resources-loader', 
        [
            'assets/scss/file/_path.scss',
            'assets/scss/file/_path-two.scss'
        ]
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
