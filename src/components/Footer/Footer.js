import React from "react";

import { Link } from "components/Router";
import "./Footer.scss";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const Footer = () => (
  <footer>
    <Link to="/contact">@</Link>
  </footer>
);

export default Footer;
