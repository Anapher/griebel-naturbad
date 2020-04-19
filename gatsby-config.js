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
            title: "Leistungen",
            links: [
              {
                title: "Öffentliche Naturbäder",
                url: "/projects/type/public",
              },
              {
                title: "Private Schwimmteiche",
                url: "/projects/type/privatePool",
              },
              {
                title: "Wasserspielplätze",
                url: "/projects/type/waterPlayground",
              },
              {
                title: "Grünanlagen, Gärten",
                url: "/projects/type/gardens",
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
        name: `data`,
        path: `${__dirname}/content`,
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
        icon: `content/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
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
  ],
};
