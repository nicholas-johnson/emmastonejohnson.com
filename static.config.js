import path from "path";
import axios from "axios";

export default {
  getRoutes: () => {
    // const { data: posts } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );

    const posts = [
      {
        id: 94,
        title: "Blue Scratch",
        medium: 'Acrylic on Canvas 36" x 48',
        date: "2018-05-22T23:46:37.121Z",
        image: "blue_scratch.jpg",
        body: `Art washes away from the soul the dust of everyday life - Pablo Picasso`
      }
    ];

    return [
      {
        path: "/",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }

      // {
      //   path: "/blog-2",
      //   getData: () => ({
      //     posts
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     template: "src/containers/Post",
      //     getData: () => ({
      //       post
      //     })
      //   }))
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
    require.resolve("react-static-plugin-sitemap")
  ]
};
