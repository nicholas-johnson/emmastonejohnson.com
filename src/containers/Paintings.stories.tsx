import React from "react";
import { storiesOf } from "@storybook/react";
import { PaintingsPage } from "./Paintings";
import { paintings } from "../../config/paintings";

const stories = storiesOf("Pages", module);

stories.add("Paintings", () => <PaintingsPage paintings={paintings} />);
