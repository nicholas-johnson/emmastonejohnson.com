import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../../components/Typography/index";
import Content from "../../components/Content/index";
import { Contact } from "./Contact";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Content", module);

stories.addDecorator(withKnobs);

stories.add("Contact", () => (
  <div style={{ maxWidth: "600px" }}>
    <Content>
      <Typography>
        <Contact />
      </Typography>
    </Content>
  </div>
));
