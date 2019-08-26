import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Footer } from "./Footer";
import Typography from "../Typography";
import Content from "../Content";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

stories.add("Footer", () => (
  <div>
    <Content>
      <Typography>
        <Footer />
      </Typography>
    </Content>
  </div>
));
