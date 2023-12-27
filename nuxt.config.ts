// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                dir: "rtl",
                lang: "fa",
            },
        },
    },

    runtimeConfig: {
        public: {
            apiBase: "Your_API",

        },
    },

    css: ["~/assets/css/main.css"],
    modules: ["@formkit/nuxt"],
    build: {
        transpile: ["vue-toastification"],
    },
});
