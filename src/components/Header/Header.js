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
    <nav>
      <ul>
        <li>
          <Link to="/" getProps={isActive}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" getProps={isActive}>
            About
          </Link>
        </li>
        <li>
          <Link to="/commissions" getProps={isActive}>
            Commissions
          </Link>
        </li>
        <li>
          <Link to="/contact" getProps={isActive}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
