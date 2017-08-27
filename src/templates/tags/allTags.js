import React from 'react'
import GatsbyLink from 'gatsby-link';
import Link from '../../components/link';
import HomeIcon from 'react-icons/lib/fa/home';

export default ({ postInfo }) => {
  const { posts } = postInfo;

  return (
    <div className='wrapper'>
      <h1 className='tags-title'>Tags</h1>
      <ul className="tags">
        {
          Object.keys(posts).map(tagName => {
            const tags = posts[tagName];
            return (
              <li key={ tagName }>
                <GatsbyLink to={`/tags/${tagName}`}>
                  { tagName }
                </GatsbyLink>
              </li>
            );
          })
        }
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  )
}