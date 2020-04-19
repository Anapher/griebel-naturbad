const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get the template config settings.
  const {
    data: {
      site: {
        siteMetadata: { templates },
      },
    },
  } = await graphql(`
    {
      site {
        siteMetadata {
          templates {
            projects {
              path
              pathPrefix
              template
              pagination {
                template
                resultsPerPage
              }
              filters {
                type {
                  pathPrefix
                  template
                }
              }
            }
          }
        }
      }
    }
  `);

  /* Find all of the markdown files, sorted descending by filename.
   * Newest-to-oldest with YYYY-MM-DD date file prefix.
   */

  const createMarkdownPages = async ({
    regex,
    template,
    pathPrefix = "",
    paginate = false,
  }) => {
    const result = await graphql(`
			{
				allMdx(
					filter: { fileAbsolutePath: { regex: "${regex}" } }
					sort: {order: DESC, fields: frontmatter___date}
				) {
					edges {
						node {
							body
							frontmatter {
                                id
                                date
							}
						}
					}
				}
			}
		`);

    // Report any errors if they occurred.
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    // Iterate through the query results to create individual pages.
    const pages = result.data.allMdx.edges;

    // Calculate the number of paginated results pages.
    const totalPages = Math.ceil(
      pages.length / templates.projects.pagination.resultsPerPage
    );

    const staticPages = pages.map(({ node }, index) => {
      // Use a permalink based on the frontmatter id in each markdown file header.
      const postId = node.frontmatter.id;

      // Define the date based on the filename.
      const postDate = node.date;

      // The path to the previous page.
      const previousPath =
        index === pages.length - 1
          ? null
          : `/${pathPrefix}/${pages[index + 1].node.frontmatter.id}`;

      // The path to the next page.
      const nextPath =
        index === 0
          ? null
          : `/${pathPrefix}/${pages[index - 1].node.frontmatter.id}`;

      return createPage({
        path: `${pathPrefix}/${postId}`,
        component: path.resolve(`${__dirname}/src/templates/${template}.tsx`),
        context: {
          postId,
          postDate,
          previousPath,
          nextPath,
        },
      });
    });

    return !paginate
      ? staticPages
      : Promise.all([
          ...staticPages,
          Array.from({ length: totalPages }).map((_, i) =>
            createPage({
              path: `${pathPrefix}/page/${i + 1}`,
              component: path.resolve(
                `${__dirname}/src/templates/${templates.projects.pagination.template}.tsx`
              ),
              context: {
                limit: templates.projects.pagination.resultsPerPage,
                skip: i * templates.projects.pagination.resultsPerPage,
                totalPages,
                currentPage: i + 1,
              },
            })
          ),
        ]);
  };

  // Find all of the tags used in posts and create search result pages.
  const createProjectType = async ({ pathPrefix = "", template }) => {
    const result = await graphql(`
      {
        allMdx {
          group(field: frontmatter___type) {
            type: fieldValue
            totalCount
          }
        }
      }
    `);

    // Report any errors if they occurred.
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }

    // Create a page for each tag.
    const types = result.data.allMdx.group;
    return types.map(async ({ type }) =>
      createPage({
        path: `${pathPrefix}/${type}`,
        component: path.resolve(`${__dirname}/src/templates/${template}.tsx`),
        context: {
          type,
        },
      })
    );
  };

  return await Promise.all([
    // Create individual blog post pages and paginated results pages for mdx files in src/content/posts.
    createMarkdownPages({
      regex: templates.projects.path,
      pathPrefix: templates.projects.pathPrefix,
      template: templates.projects.template,
      paginate: true,
    }),

    // Create pages for each frontmatter tag used in src/content/posts with paginated result pages.
    createProjectType({
      pathPrefix: templates.projects.filters.type.pathPrefix,
      template: templates.projects.filters.type.template,
    }),
  ]);
};
