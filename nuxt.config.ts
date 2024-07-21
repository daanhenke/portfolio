// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0'
  },

  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@hypernym/nuxt-anime'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  css: [
    '~/assets/styles/fonts.css'
  ],

  compatibilityDate: '2024-07-21'
})