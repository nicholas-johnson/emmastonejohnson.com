import path from "path";
import axios from "axios";

export default {
  getRoutes: () => {
    const posts = [
      {
        permalink: "blue-scratch",
        title: "Blue Scratch",
        medium: "Acrylic on Canvas 150cm x 200cm",
        price: "£1800",
        date: "2018",
        image: "blue_scratch.jpg"
      },

      {
        permalink: "neon",
        title: "Neon",
        medium: "Acrylic on Canvas 150cm x 200cm",
        price: "£1800",
        date: "2018",
        image: "neon.jpg"
      },

      {
        permalink: "neon-2",
        title: "Neon 2",
        medium: "Acrylic on Canvas 150cm x 200cm",
        price: "Sold",
        date: "2018",
        image: "neon_two.jpg"
      },

      {
        permalink: "tangleweed",
        title: "Tangleweed",
        medium: "Acrylic on Canvas 150cm x 200cm",
        price: "£1800",
        date: "2018",
        image: "tangleweed.jpg"
      }
    ];

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
