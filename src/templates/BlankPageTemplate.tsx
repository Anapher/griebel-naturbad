import { Container } from "@mui/material";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../site-components/Layout";
import SEO from "../site-components/SEO";

export default function BlankPageTemplate({
  data: {
    mdx: {
      body,
      frontmatter: { title },
    },
  },
}: any) {
  return (
    <Layout>
      <SEO title={title} />
      <Container maxWidth="lg">
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
