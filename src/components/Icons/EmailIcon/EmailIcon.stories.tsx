import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../../Typography/index";
import { EmailIcon } from "./EmailIcon";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Icons", module);

stories.addDecorator(withKnobs);

stories.add("EmailIcon", () => (
  <Typography>
    <EmailIcon />
  </Typography>
));
