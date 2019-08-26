import React from "react";
import { storiesOf } from "@storybook/react";
import { Navigation } from "./Navigation";
import Typography from "../Typography";
import { withKnobs } from "@storybook/addon-knobs";

const stories = storiesOf("Component.NAvigation", module);

stories.addDecorator(withKnobs);

stories.add("Navigation", () => {
  return (
    <Typography>
      <Navigation />
    </Typography>
  );
});
