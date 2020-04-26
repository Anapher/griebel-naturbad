import React from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import typeMappings from "../utils/type-mapping";

const Projects = ({ projects, pathPrefix, disableTags = false }: any) => {
  return (
    <Grid container spacing={3}>
      {projects.map(
        ({
          node: {
            excerpt,
            frontmatter: { id, title, featuredImage, date, type, description },
          },
        }) => {
          return (
            <Grid item xs={12} sm={4} key={id}>
              <Card
                disableTags={disableTags}
                typeName={typeMappings[type]}
                typeUrl={`/${pathPrefix}/type/${type}`}
                featuredImage={featuredImage}
                title={title}
                url={`/${pathPrefix}/${id}`}
                date={date}
                excerpt={description || excerpt}
              />
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default Projects;
