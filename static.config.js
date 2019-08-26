import path from "path";
import axios from "axios";
import { paintings } from "./config/paintings";

export default {
  getRoutes: () => {
    return [
      {
        path: "/about",
        template: "src/containers/About"
      },
      {
        path: "/commissions",
        template: "src/containers/Commissions"
      },
      {
        path: "/contact",
        template: "src/containers/Contact"
      },
      {
        path: "/cv",
        template: "src/containers/CV"
      },
      {
        path: "/",
        getData: () => ({
          paintings
        }),
        template: "src/containers/Home",
        children: paintings.map((post, i) => ({
          path: `/post/${post.permalink}`,
          template: "src/containers/Post",
          getData: () => ({
            post,
            prev: paintings[i - 1],
            next: paintings[i + 1]
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-sass"),
    require.resolve("react-static-plugin-typescript")
  ]
};
