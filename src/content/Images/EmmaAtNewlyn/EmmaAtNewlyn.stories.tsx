import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { EmmaAtNewlyn } from "./EmmaAtNewlyn";
import Typography from "../../../components/Typography/index";
import Content from "../../../components/Content/index";

const stories = storiesOf("Content.Images", module);

stories.addDecorator(withKnobs);

stories.add("EmmaAtNewlyn", () => (
  <div>
    <Content>
      <Typography>
        <EmmaAtNewlyn />
      </Typography>
    </Content>
  </div>
));
