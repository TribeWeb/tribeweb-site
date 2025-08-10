// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxthub/core',
    '@vueuse/nuxt',
    "@nuxtjs/seo"
    ],

  site: {
    url: 'https://tribeweb.co.uk',
    name: 'tribeweb',
    description: "tribeweb builds websites and web applications that are crafted to meet you and your customers' needs",
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  css: ['~/assets/css/main.css'],

 content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    },
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio'
    }
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/api/search.json': { prerender: true }
  },

  devtools: {
    enabled: true
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2024-07-11'
})