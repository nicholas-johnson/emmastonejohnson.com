import path from 'path';
import fs from 'fs';
import frontMatter from 'front-matter';
import marked from 'marked';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export default {
  getRoutes: async () => {
    // get blogs
    const files = await readdir(`${__dirname}/src/blog`)
    const posts = await Promise.all(
      files.map(async (filename) => {
        const file = await readFile( `${__dirname}/src/blog/${filename}`)

        const post = frontMatter(file.toString());
        post.html = marked(post.body);
        post.filename = filename;
        post.path = `/${filename.replace('.md', '')}`;
        return post;
      })
    );
    const sortedPosts = await posts
      .filter(post => post.attributes.published)
      .sort((a,b) => a.attributes.date > b.attributes.date ? -1 : 1)

    // return the URLs
    return await [
      {
        path: '/',
        template: 'src/pages/home',
        getData: () => ({
          posts
        }),
      },
      {
        path: '/blog',
        template: 'src/pages/blog',
        getData: () => ({
          posts
        }),
        children: posts.map((post) => (
          {
            path: post.path,
            template: 'src/pages/blog_post',
            getData: () => ({
              post,
              posts
            }),
          }
        )),

      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass'),
  ],
}
