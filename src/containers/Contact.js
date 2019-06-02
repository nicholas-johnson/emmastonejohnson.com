import React from "react";

import Header from "../components/Header/Header";

import "./Contact.scss";
import { Parser } from "marked";

export default () => (
  <div className="contact-page">
    <Header />
    <div class="content">
      <p>
        If you'd like to contact Emma about a commission, painting or
        exhibition, you can send her an email at{" "}
        <a href="mailto:emma@emmastonejohnson.com">emma@emmastonejohnson.com</a>{" "}
      </p>
      <ul>
        <li>
          Instagram{" "}
          <a
            href="https://www.instagram.com/emmastonejohnson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @emmastonejohnson
          </a>
        </li>
        <li>
          Email <a href="mailto:emma@emmastonejohnson.com">@emmastonejohnson</a>
        </li>
      </ul>
    </div>
  </div>
);
