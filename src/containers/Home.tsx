import React from "react";
import Navigation from "../components/Navigation/index";
import Header from "../components/Header/index";
import Typography from "../components/Typography/index";
import Content from "../components/Content/index";
import Testimonial from "../content/Testimonial";
import Carousel from "../components/Carousel";

import "./Home.scss";

export default () => (
  <div className="home-page">
    <Typography>
      <Navigation />
      <Header />
      <Content>
        <Testimonial />
        <Carousel />
      </Content>
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
