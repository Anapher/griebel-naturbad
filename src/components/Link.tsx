import React from "react";
import { Link } from "gatsby";
import { Link as MaterialLink } from "@material-ui/core";

const isExternalUrl = (url: string) => url.indexOf("//") > -1;

type Props = {
  to: string;
  children: React.ReactNode;
};

export default ({ to, children }: Props) => {
  // Open external links in a new browser tab and internal links using Gatsby's router.
  return isExternalUrl(to) ? (
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <Link to={to}>{children}</Link>
  );
};
