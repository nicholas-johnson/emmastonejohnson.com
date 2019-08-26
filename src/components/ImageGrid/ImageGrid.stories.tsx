import React from "react";
import { storiesOf } from "@storybook/react";
import { ImageGrid } from "./ImageGrid";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../Typography";
import { paintings } from "../../../config/paintings";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

const style = { maxWidth: "1000px" };

stories.add("ImageGrid", () => (
  <div style={style}>
    <Typography>
      <ImageGrid images={paintings} />
    </Typography>
  </div>
));
