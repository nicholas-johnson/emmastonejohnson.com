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
      <p>This site is being rebuilt.</p>
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
