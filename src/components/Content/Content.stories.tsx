import React from "react";
import { storiesOf } from "@storybook/react";
import { Content } from "./Content";
import { withKnobs } from "@storybook/addon-knobs";
import ArtistStatement from "../../content/ArtistsStatement";
import Typography from "../Typography";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

stories.add("Content", () => (
  <div>
    <Content>
      <Typography>
        <ArtistStatement />
      </Typography>
    </Content>
  </div>
));
