/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Büro für Freiraumplanung`,
    description: `Büro für Freiraumplanung. Öffentliche Naturbäder, private Schwimmteiche, Wasserspielplätze, Grünanlagen, Gärten, und mehr.`,
    lang: "de",
    siteUrl: `https://www.yourdomain.tld`,

    components: {
      appbar: {
        title: "Büro für Freiraumplanung",
        links: [
          {
            title: "Projekte",
            children: [
              {
                title: "Öffentliche Naturschwimmbäder",
                to: "/projekte/uebersicht/oeffentliche-baeder",
              },
              {
                title: "Private Schwimmteiche",
                to: "/projekte/uebersicht/private-schwimmteiche",
              },
              {
                title: "Wasserspielplätze/Sprühfelder",
                to: "/projekte/uebersicht/wasserspielplaetze",
              },
              {
                title: "Eingriffs- und Ausgleichsplanung",
                to: "/projekte/uebersicht/eingriffs-und-ausgleichsplanung",
              },
              {
                title: "Campingplätze",
                to: "/projekte/uebersicht/campingplaetze",
              },
              {
                title: "Grünanlagen, Gärten",
                to: "/projekte/uebersicht/gruenanlagen-gaerten",
              },
            ],
          },
          { title: "Referenzen", to: "/referenzen" },
          { title: "Kontakt", to: "/kontakt" },
        ],
      },
      footer: {
        copyright: "dipl.-ing. Franz Griebel",
      },
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content",
      },
      __key: "content",
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
};
