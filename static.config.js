import path from "path";
import axios from "axios";

export default {
  getRoutes: () => {
    const posts = [
      {
        permalink: "blue-scratch",
        title: "Blue Scratch",
        medium: 'Acrylic on Canvas 36" x 48',
        price: "1800",
        date: "2018-05-22T23:46:37.121Z",
        image: "blue_scratch.jpg",
        body: `Art washes away from the soul the dust of everyday life - Pablo Picasso`
      },

      {
        permalink: "neon",
        title: "Neon",
        medium: 'Acrylic on Canvas 36" x 48',
        price: "1800",
        date: "2018-05-22T23:46:37.121Z",
        image: "neon.jpg",
        body: `Art washes away from the soul the dust of everyday life - Pablo Picasso`
      }
    ];

    return [
      {
        path: "/about",
        template: "src/containers/About"
      },
      {
        path: "/",
        getData: () => ({
          posts
        }),
        template: "src/containers/Home",
        children: posts.map((post, i) => ({
          path: `/post/${post.permalink}`,
          template: "src/containers/Post",
          getData: () => ({
            post,
            prev: posts[i - 1],
            next: posts[i + 1]
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
    require.resolve("react-static-plugin-sass")
  ]
};
