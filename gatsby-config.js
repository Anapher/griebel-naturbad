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
      contact: {
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265403.2034364091!2d8.678173374202933!3d51.72406088873035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb15c5ede660eb%3A0x6831c71a90c6b6d2!2sIm%20Graben%209%2C%2034292%20Ahnatal!5e0!3m2!1sde!2sde!4v1600865734418!5m2!1sde!2sde",
        address:
          "Büro für Freiraumplanung\nIm Graben 9\n34292 Ahnatal\nHessen, Deutschland",
        phone: "Franz Griebel\n05609 8097939\nMon - Fr, 8:00-18:00",
        emailAddress: "info@griebel-naturbad.de",
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
