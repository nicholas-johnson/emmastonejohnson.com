import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "./Header";
import { withKnobs, text } from "@storybook/addon-knobs";
import Typography from "../Typography";
import { headerProps } from "../Component.config";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

stories.add("Header", () => {
  const title = text("Title", headerProps.title);

  return (
    <div>
      <Typography>
        <Header title={title} />
      </Typography>
    </div>
  );
});
