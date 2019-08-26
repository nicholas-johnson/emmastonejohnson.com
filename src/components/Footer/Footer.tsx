import React from "react";
// import { Link } from "components/Router";
import "./Footer.scss";
import { EmailIcon, InstagramIcon } from "../Icons";

const Email = () => (
  <a className="email" href="mailto:emma@emmastonejohnson.com">
    <EmailIcon />
  </a>
);

const Instagram = () => (
  <a
    className="instagram"
    href="https:www.instagram.com/emmastonejohnson/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <InstagramIcon />
  </a>
);

export const Footer = () => (
  <footer>
    <ul>
      <li>
        <Instagram />
      </li>
      <li>
        <Email />
      </li>
    </ul>
  </footer>
);
