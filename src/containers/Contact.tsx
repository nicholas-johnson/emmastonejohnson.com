import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "../components/Typography";
import Content from "../components/Content";
import Contact from "../content/Contact";

import "./About.scss";

export default () => (
  <div className="about-page">
    <Typography>
      <Navigation />
      <Header />
      <Content>
        <Contact />
        <Footer />
      </Content>
    </Typography>
  </div>
);
