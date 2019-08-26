import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../../Typography/index";
import { InstagramIcon } from "./InstagramIcon";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Icons", module);

stories.addDecorator(withKnobs);

stories.add("InstagramIcon", () => (
  <Typography>
    <InstagramIcon />
  </Typography>
));
