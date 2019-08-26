import React from "react";
import { storiesOf } from "@storybook/react";
import { Menu } from "./Menu";
import Typography from "../../Typography";
import { withKnobs, text, number } from "@storybook/addon-knobs";

const stories = storiesOf("Component.Navigation.Menu", module);

stories.addDecorator(withKnobs);

stories.add("Component", () => (
  <Typography>
    <Menu />
  </Typography>
));
