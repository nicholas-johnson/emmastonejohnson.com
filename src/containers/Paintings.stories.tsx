import React from "react";
import { storiesOf } from "@storybook/react";
import Paintings from "./Paintings";

const stories = storiesOf("Pages", module);

stories.add("Paintings", () => <Paintings />);
