module.exports = {
  siteMetadata: {
    title: `Büro für Freiraumplanung`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    lang: "de",
    components: {
      appbar: {
        navigation: [
          {
            title: "Projekte",
            url: "https://Www.google.de",
          },
          {
            title: "Hello 2",
            links: [
              {
                title: "Test 2",
                url: "https://Www.google.de",
              },
              {
                title: "Test 3",
                url: "https://Www.google.de",
              },
            ],
          },
          {
            title: "Kontakt",
            url: "/contact",
          },
        ],
      },
      footer: {
        copyright: "Griebel",
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
