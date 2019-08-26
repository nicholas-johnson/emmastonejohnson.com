import React from "react";
import { storiesOf } from "@storybook/react";
import Content from "../../Content/index";
import { Image } from "./Image";
import { withKnobs } from "@storybook/addon-knobs";
import Typography from "../../Typography/index";

const stories = storiesOf("Component", module);

stories.addDecorator(withKnobs);

stories.add("Image", () => (
  <div>
    <Content>
      <Typography>
        <Image
          src="/images/paintings/neon.jpg"
          title="Neon"
          price={1500}
          medium="acrylic on canvas"
          dimensions="1500 x 1500cm"
          permalink="neon"
          sold={false}
        />
      </Typography>
    </Content>
  </div>
));
