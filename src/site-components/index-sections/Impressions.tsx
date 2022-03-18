import {
  alpha,
  Container,
  ContainerProps,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import ProjectCarousel, {
  CarouselImage,
} from "../../templates/project-template/ProjectCarousel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import to from "../../utils/to";
import _ from "lodash";

const ImageDescriptionContainer = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
});

const ImageDescription = styled("div")(({ theme }) => ({
  backgroundColor: alpha(theme.palette.grey[800], 0.7),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const renderProjectReference =
  (projectPrefix: string, projectIdToUrl: { [key: number]: string }) =>
  ({ desc, projectNumber }: ReferencedCarouselImage) => {
    return (
      <ImageDescriptionContainer>
        <ImageDescription>
          <InfoOutlinedIcon fontSize="small" />
          <Typography sx={{ ml: 1, fontSize: 14 }}>
            <Link
              sx={{ color: "white" }}
              {...to(`/${projectPrefix}${projectIdToUrl[projectNumber]}`)}
            >
              {desc}
            </Link>
          </Typography>
        </ImageDescription>
      </ImageDescriptionContainer>
    );
  };

const parseImpressionFilename = (name: string) => {
  const parts = name.split("-");
  return { desc: parts[0], projectNumber: Number(parts[1]) };
};

type ReferencedCarouselImage = CarouselImage & {
  projectNumber: number;
};

export default function Impressions(props: ContainerProps) {
  const {
    site: {
      siteMetadata: {
        urls: { projectPrefix },
      },
    },
    allFile: { edges },
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          urls {
            projectPrefix
          }
        }
      }
      allFile(
        filter: { relativePath: { regex: "landing-page/impressions//" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1140
                aspectRatio: 1.777
              )
            }
          }
        }
      }
      allMdx(filter: { fileAbsolutePath: { regex: "/content/projekte/" } }) {
        nodes {
          frontmatter {
            projectNumber
            id
          }
        }
      }
    }
  `);

  const projectIdToUrlId = Object.fromEntries(
    nodes.map((x: any) => [x.frontmatter.projectNumber, x.frontmatter.id])
  );

  const images = _.shuffle(edges).map(
    ({ node: { name, childImageSharp } }: any) => ({
      image: getImage(childImageSharp)!,
      ...parseImpressionFilename(name),
    })
  );

  return (
    <Container maxWidth="lg" {...props}>
      <Typography textAlign="center" variant="h5" gutterBottom>
        Impressionen
      </Typography>
      <ProjectCarousel<ReferencedCarouselImage>
        images={images}
        renderOverlay={renderProjectReference(projectPrefix, projectIdToUrlId)}
      />
    </Container>
  );
}
