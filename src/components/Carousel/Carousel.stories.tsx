import React from "react";
import { storiesOf } from "@storybook/react";
import Content from "../Content";
import { Carousel } from "./Carousel";
import { withKnobs } from "@storybook/addon-knobs";
import ArtistStatement from "../../content/ArtistsStatement";
import Typography from "../Typography";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

stories.add("Carousel", () => (
  <div>
    <Content>
      <Typography>
        <Carousel />
      </Typography>
    </Content>
  </div>
));
