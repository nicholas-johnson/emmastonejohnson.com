import React from "react";

import { Link } from "components/Router";
import "./Header.scss";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const Header = () => (
  <footer>
    <Link to="/">Home</Link>
  </footer>
);

export default Header;
