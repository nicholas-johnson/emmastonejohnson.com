import React from "react";
import { storiesOf } from "@storybook/react";
import Home from "./Home";

const stories = storiesOf("Pages", module);

stories.add("Home", () => <Home />);
