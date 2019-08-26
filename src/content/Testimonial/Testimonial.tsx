import React from "react";
import "./Testimonial.scss";

const content = [
  "Emma's paintings are playful, vibrant and emotive. Her unique ability to use colour and mark-making, makes her art so desirable.",
  "Emma's paintings take me to a very happy place every time I look at them. The bold brush strokes and vibrant, sumptuous colours fill me with such joy.",
  "Energetic, emotive and playful – you see and feel something different every time in Emma's paintings."
];

const name = "Lisa Walker";

export const Testimonial = () => (
  <div className="testimonial">
    <p>&ldquo;{content[0]}&rdquo;</p>
    <p className="name">
      <em>{name}</em>
    </p>
  </div>
);
