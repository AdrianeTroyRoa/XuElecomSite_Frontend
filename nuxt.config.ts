// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: {
    redirect: false,
  },
  site: {
    url: 'https://xucsg-elecom.netlify.app',
    name: 'XU-CSG EleCom | Official Website',
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/sitemap"],
});
