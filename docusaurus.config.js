// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodingJ的博客",
  tagline: "The codingJ Blog",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://codingj.top",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/index",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pengshengjie", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/pengshengjie/blog/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/pengshengjie/blog/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "CodingJ的博客",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "工程化/index",
            position: "left",
            label: "学习笔记",
          },
          // {
          //   // type: "blog",
          //   to: "/s",
          //   position: "left",
          //   label: "学习笔记2",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },

          {
            href: "https://github.com/pengshengjie",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   // links: [
      //   //   {
      //   //     title: "Docs",
      //   //     items: [
      //   //       {
      //   //         label: "Tutorial",
      //   //         to: "/docs/frontenddesign",
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: "Community",
      //   //     items: [
      //   //       {
      //   //         label: "Stack Overflow",
      //   //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //   //       },
      //   //       {
      //   //         label: "Discord",
      //   //         href: "https://discordapp.com/invite/docusaurus",
      //   //       },
      //   //       {
      //   //         label: "Twitter",
      //   //         href: "https://twitter.com/docusaurus",
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: "More",
      //   //     items: [
      //   //       {
      //   //         label: "Blog",
      //   //         to: "/blog",
      //   //       },
      //   //       {
      //   //         label: "GitHub",
      //   //         href: "https://github.com/facebook/docusaurus",
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      //   // copyright: `<a href="https://beian.miit.gov.cn/" target="_blank">Copyright © ${new Date().getFullYear()} CodingJ's Blog, 蜀ICP备2023019010号</a>`,
      // },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
      // algolia: {
      //   apiKey: 'cb929fb7c04c08f0a6f82641efda514b',
      //   indexName: 'codingj_top',
      //   appId: '734SLMDMGB',
      //         // Optional: see doc section below
      // contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'https://www.codingj.top/',

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },
      // // Optional: Algolia search parameters
      // searchParameters: {},
      // // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',
      // //... other Algolia params
      // }
    }),
    plugins: []
};

module.exports = config;
