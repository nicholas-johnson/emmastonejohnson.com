import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Typography from "../components/Typography";
import ImageGrid from "../components/ImageGrid";
import { paintings } from "../../config/paintings";

import "./Paintings.scss";

export default () => (
  <div className="Paintings-page">
    <Typography>
      <Navigation />
      <Header />
      <ImageGrid images={paintings} />
    </Typography>
  </div>
);

// import React from "react";
// import { useRouteData } from "react-static";

// import Sidebar from "../components/Sidebar/Sidebar";

// import Header from "../components/Header/Header";
// import PostList from "../components/PostList/PostList";
// import "./Paintings.scss";

// export default function Paintings() {
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
