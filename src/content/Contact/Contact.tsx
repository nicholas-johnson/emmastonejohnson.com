import React from "react";
import { InstagramIcon, EmailIcon } from "../../components/Icons";

import "@fortawesome/fontawesome-free/css/all.css";
import "./Contact.scss";

const Email = () => (
  <a className="email" href="mailto:emma@emmastonejohnson.com">
    <EmailIcon /> emma@emmastonejohnson.com
  </a>
);

const Instagram = () => (
  <a
    className="instagram"
    href="https:www.instagram.com/emmastonejohnson/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <InstagramIcon /> emmastonejohnson
  </a>
);

export const Contact = () => (
  <div className="contact">
    <p>
      If you'd like to contact me about a commission, painting or exhibition,
      you can contact me by email or Instagram.
    </p>
    <ul>
      <li>
        <Instagram />
      </li>
      <li>
        <Email />
      </li>
    </ul>
  </div>
);
