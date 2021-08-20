const { description } = require("../../package");
const { path } = require("@vuepress/utils");

module.exports = {
  clientAppEnhanceFiles: path.resolve(__dirname, "./enhanceApp.js"),
  title: ' ',
  description: description,
  head: [
    ["link", { rel: "icon", href: "/img/reach.svg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  themeConfig: {
    darkMode: true,
    logo: "img/reach.svg",
    sidebarDepth: 1,
    repo: "",
    editLinks: false,
    editLinkText: "",
    lastUpdated: false,
    contributors: false,
    docsDir: "",
    backToHome: "Back to home",
    searchPlaceholder: "Search...",
    markdown: {
      lineNumbers: true,
    },
    navbar: [
      {
        text: "Inicio",
        link: "/",
      },
      {
        text: "Guía",
        link: "/guide/",
      },
      {
        text: "Tutoriales",
        link: "/tutorial/",
      },
      {
        text: "Contacto Soporte",
        link: "/contacto/",
      },
      {
        text: "Enterprise Communicator",
        link: "https://ec.tigobusiness.hn/",
      },
      {
        text: "Docs v4",
        link: "https://docs.reach.tools/manual-tecnico/#page-content",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guía",
          collapsable: false,
          children: ["README.md", "estructura", "uri"],
        },
        {
          text: "Api Rest",
          collapsable: false,
          children: ["rest-contacts", "rest-group-tag", "rest-messages"],
        },
        {
          text: "Api Http",
          collapsable: false,
          children: [
            "api-individual",
            "api-groups",
            "api-mensajes-entrantes",
            "api-notificacion-error",
            "api-llamada-fallida",
          ],
        },
        {
          text: "SDK's",
          collapsable: false,
          children: ["sdk-contacts", "sdk-groups", "sdk-messages"],
        },
      ],
      "/tutorial/": [
        {
          text: "Manual WEB",
          children: [
            "README.md",
            "contactos",
            "mensajeria",
            "links",
            "reportes",
            "usuarios",
          ],
        },
      ],
      "/contacto/": [
        {
          text: "Contacto Soporte",
          collapsable: true,
          children: ["README.md"],
        },
      ],
    },
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-search",
    "@vuepress/register-components",
    {
      componentsDir: path.resolve(__dirname, "./components"),
      maxSuggestions: 10,
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
    },
  ],
};
