import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { lipsum1, lipsum2 } from "./lipsum";

const stories = storiesOf("Component.Typography", module);

stories.addDecorator(withKnobs);

stories.add("Component", () => {
  const biggestText = text("Biggest Text", "EMMA STONE-JOHNSON");
  const bigText = text("Big Text", "This is big text");
  const smallText = text("Small Text", "This is small text");

  return (
    <div style={{ maxWidth: "600px" }}>
      <Typography>
        <div className="biggest">{biggestText}</div>
        <div className="big">{bigText}</div>
        <div className="normal">
          <p>{lipsum1}</p>
          <p>{lipsum2}</p>
        </div>
        <div className="small">{smallText}</div>
      </Typography>
    </div>
  );
});
