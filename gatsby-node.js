const path = require(`path`);

const PROJECT_TEMPLATE = "ProjectTemplate.tsx";

const getDirectoryOfFilename = (path) =>
  path.substring(0, path.lastIndexOf("/") + 1);

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
              url
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
        frontmatter: { id, url, template },
      },
    }) =>
      createPage({
        path: `${url || id}`,
        component: path.resolve(`./src/templates/${template}`),
        context: {
          id,
        },
      })
  );
}

async function createProjectPages({ graphql, actions: { createPage } }) {
  const {
    data: {
      allMdx: { edges },
      site: {
        siteMetadata: {
          urls: { projectPrefix, projectCategoryPrefix },
        },
      },
    },
  } = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/projekte/" } }
        sort: { order: DESC, fields: frontmatter___year }
      ) {
        edges {
          node {
            frontmatter {
              id
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          urls {
            projectPrefix
            projectCategoryPrefix
          }
        }
      }
    }
  `);

  const projectPages = edges.map(
    ({
      node: {
        frontmatter: { id },
        fileAbsolutePath,
      },
    }) =>
      createPage({
        path: `${projectPrefix}${id}`,
        component: path.resolve(
          `${__dirname}/src/templates/${PROJECT_TEMPLATE}`
        ),
        context: {
          id,
          carouselDirectory:
            getDirectoryOfFilename(fileAbsolutePath) + "carousel/",
          specificationsFilename:
            getDirectoryOfFilename(fileAbsolutePath) + "specifications.txt/",
        },
      })
  );

  return projectPages;
}

exports.createPages = async (info) => {
  return Promise.all([createStaticPages(info), createProjectPages(info)]);
};
