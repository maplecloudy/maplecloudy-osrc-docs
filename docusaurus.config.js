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
  favicon: 'img/favicon.ico',
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
          src: 'img/logo.png',
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
          src: 'img/logo.png',
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
                label: 'Release Notes',
                type: 'doc',
                to: 'updates/release-notes',
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
      algolia: {
        apiKey: '0664a9795ced4a4b187cd8b010ec9f5d',
        indexName: 'appcircle',
        appId: 'MLYVQZS3BY',
        contextualSearch: false,
      },
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

};

module.exports = config;
