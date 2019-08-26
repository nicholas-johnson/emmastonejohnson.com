import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../../components/Typography/index";
import Content from "../../components/Content/index";
import { Testimonial } from "./Testimonial";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Content", module);

stories.addDecorator(withKnobs);

stories.add("Testimonial", () => (
  <div style={{ maxWidth: "600px" }}>
    <Content>
      <Typography>
        <Testimonial />
      </Typography>
    </Content>
  </div>
));
