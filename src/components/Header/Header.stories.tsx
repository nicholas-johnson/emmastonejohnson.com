import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "./Header";
import Typography from "../Typography";

const stories = storiesOf("Component", module);

stories.add("Header", () => {
  return (
    <div>
      <Typography>
        <Header />
      </Typography>
    </div>
  );
});
