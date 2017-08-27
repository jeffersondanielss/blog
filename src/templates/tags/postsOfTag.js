import React from 'react'
import GatsbyLink from 'gatsby-link';

import Link from '../../components/link';
import TagsIcon from 'react-icons/lib/fa/tags';
import Footer from '../../components/footer/footer';
import Notification from '../../components/notification/notification'

export default ({ postInfo }) => {
const { post, tag } = postInfo;

return (  
  <div>
    <div className='tag-template wrapper'>
      <h1 className='tags-title'>
        { tag } <Notification amount={ post.length } />
      </h1>
      <ul>
        {
          post.map(({ id, frontmatter, excerpt }) => {
            return (
              <li className='post-preview' key={ id }>
                <h1 className='post-preview-title'>
                  <GatsbyLink to={ frontmatter.path }>
                    { frontmatter.title }
                  </GatsbyLink>
                </h1>
                <p className='post-preview-text'>
                  { excerpt }
                </p>
              </li>
            );
          })
        }
      </ul>
      <Link to="/tags">
        <TagsIcon /> All tags
      </Link>
    </div>

    <Footer />
  </div>
)
}