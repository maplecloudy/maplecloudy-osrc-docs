// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const rlc = require('remark-link-card');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OSRC Docs',
  tagline: 'Guides and Docs for OSRC.COM',
  url: 'https://docs.osrc.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'maplecloudy', // Usually your GitHub org/user name.
  projectName: 'maplecloudy-osrc-docs', // Usually your repo name.

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [rlc],
          // Please change this to your repo.
          editUrl: 'https://github.com/maplecloudy/maplecloudy-osrc-docs/tree/master/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OSRC',
        logo: {
          alt: 'OSRC Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://www.osrc.com',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://os.osrc.com',
            label: 'OS',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: 'img/logo.svg',
          alt: 'OSRC Logo',
          href: 'https://www.osrc.com',
          width: 40,
          height: 40,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                type: 'doc',
                to: '/',
              },
              {
                label: '版本记录',
                href: 'https://www.osrc.com/maplecloudy/wikis/wiki_824677758257651712'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OSRC',
                href: 'https://www.osrc.com',
              },
              {
                label: 'OS',
                href: 'https://os.osrc.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/maplecloudy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OSRC, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'groovy', 'java'],
      },
      // algolia: {
      //   apiKey: '0664a9795ced4a4b187cd8b010ec9f5d',
      //   indexName: 'appcircle',
      //   appId: 'MLYVQZS3BY',
      //   contextualSearch: false,
      // },
    }),
    plugins: [
      [
        '@docusaurus/plugin-google-analytics',
        {
          trackingID: 'UA-40954643-12',
          anonymizeIP: true,
        },
      ],
      'docusaurus-plugin-sass'
    ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["zh"],
        // ```
      },
    ],
  ],
};

module.exports = config;
