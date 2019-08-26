import React from "react";
import { storiesOf } from "@storybook/react";
import { X } from "./X";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../../Typography";

import "./X.scss";

const stories = storiesOf("Component.Navigation.X", module);

stories.addDecorator(withKnobs);

stories.add("Component", () => {
  return (
    <div>
      <Typography>
        <X onClick={() => {}} />
      </Typography>
    </div>
  );
});
