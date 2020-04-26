module.exports = {
  siteMetadata: {
    title: `Büro für Freiraumplanung`,
    subtitle: "dipl.-ing. Franz Griebel",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    lang: "de",
    contact: {
      location: [51.370221, 9.387045],
      address:
        "Büro für Freiraumplanung\nIm Graben 9\n34292 Ahnatal\nHessen, Deutschland",
      phone: "Franz Griebel\n05609 8097939\nMon - Fr, 8:00-18:00",
      fax: "05609 8097938",
      emailAddress: "info@griebel-naturbad.de",
    },
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
                url: "/services/public",
              },
              {
                title: "Private Schwimmteiche",
                url: "/services/privatePool",
              },
              {
                title: "Wasserspielplätze",
                url: "/services/waterPlayground",
              },
              {
                title: "Grünanlagen, Gärten",
                url: "/services/garden",
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
        copyright: "dipl.-ing. Franz Griebel",
      },
    },
    templates: {
      projects: {
        path: "/content/projects/",
        pathPrefix: "projects",
        template: "Project.tsx",
        pagination: {
          template: "ProjectsAll.tsx",
          resultsPerPage: 6,
        },
        filters: {
          type: {
            pathPrefix: "projects/type",
            template: "ProjectType.tsx",
          },
        },
      },
      services: {
        pathPrefix: "services",
        template: "Service.tsx",
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
    "gatsby-plugin-react-leaflet",
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
  pathPrefix: "/griebel-naturbad",
};
