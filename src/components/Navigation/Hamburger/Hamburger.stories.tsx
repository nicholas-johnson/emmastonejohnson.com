import React from "react";
import { storiesOf } from "@storybook/react";
import { Hamburger } from "./Hamburger";
import { hamburgerProps } from "../../Component.config";
import { withKnobs, color, number } from "@storybook/addon-knobs";

const stories = storiesOf("Component.Navigation", module);

stories.addDecorator(withKnobs);

stories.add("Hamburger", () => {
  const hamburgerWidth = number("Width", hamburgerProps.width);
  const hamburgerHeight = number("Height", hamburgerProps.height);
  const barColor = color("Colour", hamburgerProps.color);
  const barThickness = number("Bar Height", hamburgerProps.thickness);

  return (
    <Hamburger
      onClick={() => {}}
      isOpen={false}
      color={barColor}
      thickness={barThickness}
      width={hamburgerWidth}
      height={hamburgerHeight}
    />
  );
});
