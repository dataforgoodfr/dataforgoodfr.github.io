// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data For Good",
  tagline: "Rediriger la technologie au service de l'intérêt général",
  url: "https://dataforgood.fr",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  favicon: "img/logo-dfg-new.png",
  organizationName: "dataforgoodfr", // Usually your GitHub org/user name.
  projectName: "dataforgoodfr.github.io", // Usually your repo name.
  plugins: [
    // require.resolve('docusaurus-lunr-search'),
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "projects",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "projects",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./projects",
        postsPerPage: "ALL",
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      navbar: {
        title: "Data For Good",
        logo: {
          alt: "Data For Good Logo",
          src: "img/logo-dfg-new2.png",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'dataforgood',
          //   position: 'left',
          //   label: "🌎 Qui sommes-nous ?",
          // },
          {
            to: "https://dataforgood.notion.site/",
            label: "🌎 Qui sommes-nous ?",
            position: "left",
          },
          {
            label: "⭐ Projets",
            position: "left",
            dropdownActiveClassDisabled: true,
            items: [
              {
                label: "Tous les projets",
                to: "/projects",
              },
              {
                label: "Saison 12",
                to: "/projects/tags/saison-12",
              },
              {
                label: "Saison 11",
                to: "/projects/tags/saison-11",
              },
              {
                label: "Saison 10",
                to: "/projects/tags/saison-10",
              },
              {
                label: "Le serment d'Hippocrate du Data Scientist",
                to: "/hippocrate",
              },
              {
                label: "Les projets qui ont besoin d'aide",
                to: "https://dataforgood.notion.site/Trouver-un-projet-6244df9394d048fca5e7350260919c8c",
              },
            ],
          },
          { to: "/blog", label: "📚 Blog", position: "left" },
          // {
          //   to: "/saison12",
          //   label: "🤿 Saison 12",
          //   position: "left",
          // },
          { to: "/iagenerative", label: "🤖 IA Générative", position: "left" },
          {
            to: "/join",
            label: "💪 Rejoindre la communauté",
            className: "button button--secondary button--lg button-navbar",
            position: "right",
          },
          {
            to: "/propose",
            label: "💡 Proposer un projet",
            className: "button button--secondary button--lg button-navbar",
            position: "right",
          },
          {
            to: "https://www.helloasso.com/associations/data-for-good/formulaires/1",
            label: "👏 Faire un don",
            className: "button button--secondary button--lg button-navbar",
            position: "right",
          },
          // {
          //   href: 'https://dataforgood.slite.com/p/channel/F9UR6bhuYCPAtvfLDje8Zc/notes/p8MSVDq6k',
          //   label: 'FAQ',
          //   position: 'right',
          // },
          {
            href: "https://github.com/dataforgoodfr",
            className: "header-github-link",
            position: "right",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "L'association Data For Good",
                to: "https://dataforgood.notion.site",
              },
              {
                label: "Serment d'Hippocrate",
                to: "/hippocrate",
              },
              {
                label: "FAQ",
                to: "https://dataforgood.notion.site/f58df2b6f02849a4ae94d8cb9ce49e5f?v=c165effdeeb140ea9fe964ca966485a6",
              },
              {
                label: "Politique de confidentialité",
                to: "/confidentialite",
              },
            ],
          },
          {
            title: "Liens externes",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dataforgoodfr",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ",
              },
              {
                label: "Meetup",
                href: "https://www.meetup.com/Data-for-Good-FR",
              },
              {
                label: "Hugging Face",
                href: "https://huggingface.co/DataForGood",
              },
              {
                label: "Twitch",
                href: "https://twitch.tv/dataforgood",
              },
            ],
          },
          {
            title: "Mais aussi",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Notion",
                href: "https://dataforgood.notion.site",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/dataforgood",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/dataforgoodfr/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/dataforgood_fr",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Data For Good - Avec amour depuis 2014 ❤ - contact à contact@dataforgood.fr`,
      },
      // announcementBar: {
      //   id: 'announcementBar-2', // Increment on change
      //   content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus" >Twitter</a>`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
