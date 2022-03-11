const path = require(`path`);

async function createStaticPages({ graphql, actions: { createPage } }) {
  const {
    data: {
      allMdx: { edges },
    },
  } = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            frontmatter {
              id
              template
            }
          }
        }
      }
    }
  `);

  return edges.map(
    ({
      node: {
        frontmatter: { id, template },
      },
    }) =>
      createPage({
        path: `${id}`,
        component: path.resolve(`./src/templates/${template}`),
        context: {
          id,
        },
      })
  );
}

exports.createPages = async (info) => {
  return Promise.all([createStaticPages(info)]);
};
