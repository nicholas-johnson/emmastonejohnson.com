import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "../components/Typography";
import Content from "../components/Content";

import ArtistsStatement from "../content/ArtistsStatement";
import AboutEmma from "../content/AboutEmma";
import EmmaInCoat from "../content/Images/EmmaInCoat";

import "./About.scss";

export default () => (
  <div className="about-page">
    <Typography>
      <Navigation />
      <Header />
      <Content>
        <EmmaInCoat />
        <AboutEmma />
        <ArtistsStatement />
        <Footer />
      </Content>
    </Typography>
  </div>
);
