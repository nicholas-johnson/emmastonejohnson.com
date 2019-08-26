import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { EmmaStandingOnCanvas } from "./EmmaStandingOnCanvas";
import Typography from "../../../components/Typography/index";
import Content from "../../../components/Content/index";

const stories = storiesOf("Content.Images", module);

stories.addDecorator(withKnobs);

stories.add("EmmaStandingOnCanvas", () => (
  <div>
    <Content>
      <Typography>
        <EmmaStandingOnCanvas />
      </Typography>
    </Content>
  </div>
));
