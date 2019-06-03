import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";

import "./About.scss";

export default () => (
  <div className="about-page">
    <Sidebar />
    <div class="content">
      <p>
        Emma Stone-Johnson is an artist working in Brighton, UK. She has
        exhibited nationally and internationally.
      </p>
    </div>
  </div>
);
