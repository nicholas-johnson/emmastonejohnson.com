import React from "react";
import { storiesOf } from "@storybook/react";
import About from "./About";

const stories = storiesOf("Pages", module);
stories.add("About", () => <About />);
