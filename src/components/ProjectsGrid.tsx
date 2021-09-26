import React from 'react';
import { Grid } from '@material-ui/core';
import Card from './ProjectCard';
import typeMappings from '../utils/type-mapping';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type ProjectInfo = {
   id: string;
   title: string;
   featuredImage: IGatsbyImageData;
   date: string;
   type: string;
};

type Props = {
   projects: ProjectInfo[];
   pathPrefix: string;
   disableTags?: boolean;
};

const Projects = ({ projects, pathPrefix, disableTags = false }: Props) => {
   return (
      <Grid container spacing={3}>
         {projects.map(({ id, title, featuredImage, date, type }) => {
            return (
               <Grid item xs={12} sm={4} key={id}>
                  <Card
                     style={{ height: '100%' }}
                     disableTags={disableTags}
                     typeName={typeMappings[type]}
                     typeUrl={`/${pathPrefix}/type/${type}`}
                     featuredImage={featuredImage}
                     title={title}
                     url={`/${pathPrefix}/${id}`}
                     date={date}
                  />
               </Grid>
            );
         })}
      </Grid>
   );
};

export default Projects;
