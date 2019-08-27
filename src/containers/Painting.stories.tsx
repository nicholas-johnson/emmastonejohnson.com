import React from "react";
import { storiesOf } from "@storybook/react";
import { PaintingPage } from "./Painting";

import { paintings } from "../../config/paintings";

const stories = storiesOf("Pages", module);

stories.add("PaintingPage", () => (
  <PaintingPage
    painting={paintings[1]}
    prev={paintings[0]}
    next={paintings[2]}
    paintings={paintings}
  />
));
