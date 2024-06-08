// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-lodash"],
  css: ["~/assets/css/main.css"],
  nitro: {
    output: {
      publicDir: "./docs",
    },
  },
  app: {
    baseURL: "/nuxt-project",
  },
});
