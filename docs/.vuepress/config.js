const { description } = require("../../package");

module.exports = {
  title: "Reach",
  description: description,
  head: [
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
        text: "Reach",
        link: "https://ec.tigobusiness.hn/",
      },
      {
        text: "Docs",
        children: [
          {
            text: "Docs v3",
            link: "https://notificame.claro.com.gt/api/docs/",
          },
          {
            text: "Docs v4",
            link: "https://docs.reach.tools/manual-tecnico/#page-content",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guía",
          collapsable: false,
          children: ["README.md", "estructura"],
        },
        {
          text: "Api Rest",
          collapsable: false,
          children: ["rest-contacts", "rest-group-tag", "rest-messages"],
        },
        {
          text: "SDK's",
          collapsable: false,
          children: ["sdk-contacts","sdk-groups", "sdk-messages"],
        },
      ],
    },
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-search",
    {
      maxSuggestions: 10,
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
    },
  ],
};
