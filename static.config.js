import path from "path";
import { paintings } from "./config/x";

export default {
  getRoutes: () => {
    return [
      {
        path: "/",
        template: "src/containers/Home"
      },
      {
        path: "/about",
        template: "src/containers/About"
      },
      {
        path: "/contact",
        template: "src/containers/Contact"
      }
      // {
      //   path: "/paintings",
      //   getData: () => ({
      //     paintings
      //   }),
      //   template: "src/containers/Paintings"
      //   // children: paintings.map((post, i) => ({
      //   //   path: `/post/${post.permalink}`,
      //   //   template: "src/containers/Post",
      //   //   getData: () => ({
      //   //     post,
      //   //     prev: paintings[i - 1],
      //   //     next: paintings[i + 1]
      //   //   })
      //   // }))
      // }
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
