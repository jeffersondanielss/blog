import React from 'react'
import GatsbyLink from 'gatsby-link';
import Link from '../../components/link';
import HomeIcon from 'react-icons/lib/fa/home';
import Notification from '../../components/notification/notification'

export default ({ postInfo }) => {
  const { posts } = postInfo;

  return (
    <div className='wrapper'>
      <h1 className='tags-title'>Tags</h1>
      <ul className="tags">
        {
          Object.keys(posts).map(tagName => {
            const tags = posts[tagName];
            console.log(tags.length)
            return (
              <li className='tags-amout-posts' key={ tagName }>
                <GatsbyLink  className='tags-title' to={`/tags/${tagName}`}>
                  { tagName } <Notification amount={ tags.length } />
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