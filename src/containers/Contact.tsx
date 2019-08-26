import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Typography from "../components/Typography";
import Content from "../components/Content";
import Contact from "../content/Contact";

import "./About.scss";

export default () => (
  <div className="about-page">
    <Typography>
      <Navigation />
      <Header />
      <Content>
        <Contact />
      </Content>
    </Typography>
  </div>
);

// import React from "react";

// import Sidebar from "../components/Sidebar/Sidebar";

// import "./Contact.scss";

// export default () => (
//   <div className="contact-page">
//     <Sidebar />
//     <div class="content">
//       <p>
//         If you'd like to contact Emma about a commission, painting or
//         exhibition, you can send her an email at{" "}
//         <a href="mailto:emma@emmastonejohnson.com">emma@emmastonejohnson.com</a>{" "}
//       </p>
//       <ul>
//         <li>
//           Instagram{" "}
//           <a
//             href="https://www.instagram.com/emmastonejohnson/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             @emmastonejohnson
//           </a>
//         </li>
//         <li>
//           Email <a href="mailto:emma@emmastonejohnson.com">@emmastonejohnson</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// );
