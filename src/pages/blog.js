import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const Blog = () => {
  const { posts } = useRouteData()

  return (
    <div>
      {
        posts.map((post) =>
          <article>
            <h1>
              <Link to={`/blog/${post.path}`}>
                {post.attributes.title}
              </Link>
            </h1>
            <div dangerouslySetInnerHTML={{__html:post.html}}></div>
          </article>
        )
      }
      {JSON.stringify(posts)}
    </div>
  )

}

export default Blog
