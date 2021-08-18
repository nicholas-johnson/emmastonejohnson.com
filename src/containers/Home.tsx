import React from "react";
import Typography from "../components/Typography";

import "./Home.scss";

export default () => (
  <div className="home-page">
    <Typography>
      {/* <Header /> */}
      <div style={{
        textAlign: 'center'
      }}>
        <h1 className="biggest">Emma Stone-Johnson</h1>
        <p>
          Emma Stone-Johnson is currently represented by
        </p>
        <p>
          <a href="https://pontonegallery.com/artists/156-emma-stone-johnson/works">The Pontone Gallery</a>
        </p>
        <div style={{
          maxWidth: "500px",
          margin: '2em auto',
          padding: '0 1em'
        }}>
          <p>
            Born in 1982, British artist Emma Stone-Johnson works in oil, acrylic, pigment and ink on canvas to investigate abstraction with a subtle, liquid palette of diffuse and tonal colour. Her lyrical handling and delicacy of controlled touch makes for pictures which are complex networks of sinuous and dynamically gestural marks.
          </p>
          <p>
            Cool hues of blue, green and optical grey are combined with purples, pinks and tangerines. The occasional, densely-concentrated red, blue or white stripe pings off the surface. Colour harmonies compliment and contrast each other to produce a vibrant effect. Smudges, pools and elliptical trails of paint pulse and throb as they wind and meander across the surface of the picture plane. One mark begets another. The work is a process of layering and accretion in response to what went before. The pictures are games of consequences, networks of interaction and suggestion. They play with the formal arrangements of abstraction.
          </p>
          <p>
            Stone-Johnson’s pictures are products of a rigorous studio practice, where technique is quietly deployed for sophisticated and shimmering effect. Her various media are expertly manipulated to bring about the necessary interactions; her colour is not muddy, but clear, her brush marks are not random, but charged and strategically placed. The relationship between the various elements eschews the frenzy of expressionism, in favour of a more detached consideration of aesthetic affect.
          </p>
          <p>
            Richly seductive, suffused with light and executed with a refined deftness of touch, these images toy and flirt with the eye. Colour, tone, shape, mark and texture glide around each other, constantly re-positioning and adjusting to make images that are forever in flux and motion. Under our gaze the pictures make and re-make themselves in a dance of causality, testament to the painter’s ability to harness her creative imagination to an organising principle.
          </p>
        </div>
      </div>
      {/* <Navigation />
      <Header />
      <Content>
        <Testimonial />
        <Carousel />
        <Footer />
      </Content> */}
    </Typography>
  </div>
);

// import React from "react";
// import { useRouteData } from "react-static";

// import Sidebar from "../components/Sidebar/Sidebar";

// import Header from "../components/Header/Header";
// import PostList from "../components/PostList/PostList";
// import "./Home.scss";

// export default function Home() {
//   const { posts } = useRouteData();
//   return (
//     <div className="index-page">
//       <Header />
//       <Sidebar />
//       <div className="content">
//         <PostList posts={posts} />
//       </div>
//     </div>
//   );
// }
