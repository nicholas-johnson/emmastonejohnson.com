import React from "react";

import { Link } from "components/Router";
import "./Header.scss";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const Header = () => (
  <header>
    <h1>
      <Link to="/">Emma Stone-Johnson</Link>
    </h1>
  </header>
);

export default Header;
