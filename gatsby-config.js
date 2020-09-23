module.exports = {
  siteMetadata: {
    title: `Büro für Freiraumplanung`,
    subtitle: "dipl.-ing. Franz Griebel",
    description: `Büro für Freiraumplanung. Öffentliche Naturbäder, private Schwimmteiche, Wasserspielplätze, Grünanlagen, Gärten, und mehr.`,
    author: `@gatsbyjs`,
    lang: "de",
    contact: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265403.2034364091!2d8.678173374202933!3d51.72406088873035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb15c5ede660eb%3A0x6831c71a90c6b6d2!2sIm%20Graben%209%2C%2034292%20Ahnatal!5e0!3m2!1sde!2sde!4v1600865734418!5m2!1sde!2sde",
      address:
        "Büro für Freiraumplanung\nIm Graben 9\n34292 Ahnatal\nHessen, Deutschland",
      phone: "Franz Griebel\n05609 8097939\nMon - Fr, 8:00-18:00",
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
    `gatsby-remark-images`,
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
  pathPrefix: "/griebel-naturbad",
};
