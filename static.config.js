import path from "path";
import { paintings } from "./config/paintingList";

export default {
  getRoutes: () => {
    return [
      {
        path: "/",
        template: "src/containers/Home",
      },
      // {
      //   path: "/about",
      //   template: "src/containers/About"
      // },
      // {
      //   path: "/contact",
      //   template: "src/containers/Contact"
      // },
      // {
      //   path: "/paintings",
      //   getData: () => ({
      //     paintings
      //   }),
      //   template: "src/containers/Paintings",
      //   children: paintings.map((painting, i) => ({
      //     path: `/${painting.permalink}`,
      //     template: "src/containers/Painting",
      //     getData: () => ({
      //       paintings,
      //       painting,
      //       prev: paintings[i - 1],
      //       next: paintings[i + 1]
      //     })
      //   }))
      // }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-sass"),
    require.resolve("react-static-plugin-typescript"),
  ],
};
