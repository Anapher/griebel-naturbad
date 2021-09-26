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
                  services {
                     pathPrefix
                     template
                  }
               }
            }
         }
      }
   `);

   const createProjectPages = async ({
      regex,
      template,
      pathPrefix = '',
      paginate = false,
      resultsPerPage,
      paginationTemplate,
   }) => {
      const result = await graphql(`
			{
				allMdx(
					filter: { fileAbsolutePath: { regex: "${regex}" } }
					sort: {order: DESC, fields: frontmatter___date}
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
      const totalPages = Math.ceil(pages.length / resultsPerPage);

      const getDirectoryOfFilename = (path) => path.substring(0, path.lastIndexOf('/') + 1);

      const staticPages = pages.map(
         ({
            node: {
               frontmatter: { id },
               fileAbsolutePath,
            },
         }) =>
            createPage({
               path: `${pathPrefix}/${id}`,
               component: path.resolve(`${__dirname}/src/templates/${template}`),
               context: {
                  id,
                  carouselDirectory: getDirectoryOfFilename(fileAbsolutePath) + 'carousel/',
               },
            }),
      );

      return !paginate
         ? staticPages
         : Promise.all([
              ...staticPages,
              Array.from({ length: totalPages }).map((_, i) =>
                 createPage({
                    path: `${pathPrefix}/page/${i + 1}`,
                    component: path.resolve(`${__dirname}/src/templates/${paginationTemplate}`),
                    context: {
                       limit: templates.projects.pagination.resultsPerPage,
                       skip: i * templates.projects.pagination.resultsPerPage,
                       totalPages,
                       currentPage: i + 1,
                    },
                 }),
              ),
           ]);
   };

   // Find all of the tags used in posts and create search result pages.
   const createProjectType = async ({ pathPrefix = '', template }) => {
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
            component: path.resolve(`${__dirname}/src/templates/${template}`),
            context: {
               type,
            },
         }),
      );
   };

   const createServiceInfo = async ({ pathPrefix = '', template }) => {
      const result = await graphql(`
         {
            allMdx(filter: { fileAbsolutePath: { regex: "/services/" } }) {
               edges {
                  node {
                     id
                     fileAbsolutePath
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

      // Create a page for each tag.
      const edges = result.data.allMdx.edges;
      return edges.map(async ({ node: { id, fileAbsolutePath } }) => {
         const type = /\/services\/([^\/]+)/.exec(fileAbsolutePath)[1];

         return createPage({
            path: `${pathPrefix}/${type}`,
            component: path.resolve(`${__dirname}/src/templates/${template}`),
            context: {
               type,
               id,
            },
         });
      });
   };

   const createArticles = async () => {
      const {
         data: {
            allMdx: { edges },
         },
      } = await graphql(`
         {
            allMdx(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
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
               component: path.resolve(`${__dirname}/src/templates/${template}`),
               context: {
                  id,
               },
            }),
      );
   };

   return await Promise.all([
      createProjectPages({
         regex: templates.projects.path,
         pathPrefix: templates.projects.pathPrefix,
         template: templates.projects.template,
         resultsPerPage: templates.projects.pagination.resultsPerPage,
         paginationTemplate: templates.projects.pagination.template,
         paginate: true,
      }),

      // Create pages for each frontmatter tag used in src/content/posts with paginated result pages.
      createProjectType(templates.projects.filters.type),

      createArticles(),

      createServiceInfo(templates.services),
   ]);
};
