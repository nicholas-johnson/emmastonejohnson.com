import React from "react";

import "./node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./EmailIcon.scss";

export const EmailIcon = () => (
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
