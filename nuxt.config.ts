// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/apollo",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
  ],
  app: {
    head: {
      title: "Games Collection",
      meta: [
        {
          name: "description",
          content:
            "This is a little games collection, done to explore Nuxt 3 and other technologies",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
      ],
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.spacex.land/graphql",
      },
      rickmorty: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  image: {
    domains: ["rickandmortyapi.com/"],
  },
});
