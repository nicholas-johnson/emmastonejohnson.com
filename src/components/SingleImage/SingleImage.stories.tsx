import React from "react";
import { storiesOf } from "@storybook/react";
import { SingleImage } from "./SingleImage";
import Typography from "../Typography/index";

import { paintings } from "../../../config/paintings";

const props = {
  painting: paintings[0]
};

const stories = storiesOf("Component", module);

stories.add("SingleImage", () => {
  return (
    <div>
      <Typography>
        <SingleImage {...props} />
      </Typography>
    </div>
  );
});
