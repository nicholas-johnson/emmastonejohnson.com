import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../../components/Typography";
import Content from "../../components/Content";
import { ArtistsStatement } from "./ArtistsStatement";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Content", module);

stories.addDecorator(withKnobs);

stories.add("ArtistsStatement", () => (
  <div style={{ maxWidth: "600px" }}>
    <Content>
      <Typography>
        <ArtistsStatement />
      </Typography>
    </Content>
  </div>
));
