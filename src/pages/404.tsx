import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import { makeStyles } from "@material-ui/core";
import { container } from "../style/shared";

const useStyles = makeStyles({
  container: container,
});

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="404: Nicht gefunden" />
      <div className={classes.container}>
        <h1>Nicht gefunden</h1>
        <p>Diese Seite existiert nicht...</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
