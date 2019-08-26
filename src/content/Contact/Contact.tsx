import React from "react";

import "@fortawesome/fontawesome-free/css/all.css";
import "./Contact.scss";

const Email = () => (
  <a className="email" href="mailto:emma@emmastonejohnson.com">
    <div className="icon">
      <span>@</span>
    </div>{" "}
    emma@emmastonejohnson.com
  </a>
);

const Instagram = () => (
  <a
    className="instagram"
    href="https:www.instagram.com/emmastonejohnson/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="icon">
      <i className="fab fa-instagram" />
    </div>{" "}
    emmastonejohnson
  </a>
);

export const Contact = () => (
  <div className="contact">
    <h2>Contact Emma</h2>
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
