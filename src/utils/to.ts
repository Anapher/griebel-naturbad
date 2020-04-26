import { Link } from "gatsby";

const to = (link: string) => ({ component: Link, to: link });

export default to;
