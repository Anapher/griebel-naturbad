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
            url: "/projects/page/1",
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
    templates: {
      projects: {
        path: "/content/projects/",
        pathPrefix: "projects",
        template: "project",
        pagination: {
          template: "projectsAll",
          resultsPerPage: 6,
        },
        filters: {
          type: {
            pathPrefix: "projects/type",
            template: "projectType",
          },
        },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-pages`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
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
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Roboto",
          },
          {
            family: "Work Sans",
            variants: ["800"],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
