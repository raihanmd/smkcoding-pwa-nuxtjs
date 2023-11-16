// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appConfig: {
    supabaseDatabasePassword: process.env.SUPABASE_DATABASE_PASSWORD,
    apikey: process.env.SUPABASE_API_KEY,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
  },
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }],
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "nuxt-primevue", "@pinia/nuxt"],
  css: ["@/assets/css/font.css", "primevue/resources/themes/lara-light-teal/theme.css"],
  tailwindcss: { cssPath: "~/assets/css.tailwind.css", configPath: "~/tailwind.config.ts" },
  build: {
    transpile: ["vue-remix-icons", "vue-typer"],
  },
  primevue: {
    options: { ripple: true },
    components: {
      include: ["Rating", "Dialog"],
    },
  },
  pwa: {
    manifest: {
      name: "Lynx Shop",
      short_name: "Lynx Shop",
      theme_color: "#fff",
      background_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "images/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "images/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "images/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  },
});
