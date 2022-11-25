import Icons from "unplugin-icons/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Sora:wght@400;500;600&display=swap",
          rel: "stylesheet",
        },
        { href: "https://fonts.googleapis.com", rel: "preconnect" },
        { href: "https://fonts.gstatic.com", rel: "preconnect" },
      ],
    },
  },
  ssr: false,
  css: ["@/assets/css/main.scss"],
  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true,
      }),
    ],
  },
});
