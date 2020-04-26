import React from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core";
import { container } from "../style/shared";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";

const useStyles = makeStyles({
  container: {
    ...container,
    marginTop: 32,
  },
});

export default function SimpleArticle({
  data: {
    mdx: {
      body,
      frontmatter: { title },
    },
  },
  pageContext: { id },
}: any) {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title={title} />
      <div className={classes.container}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
