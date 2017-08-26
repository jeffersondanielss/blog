import React from 'react';
import GatsbyLink from 'gatsby-link';
import HomeIcon from 'react-icons/lib/fa/home';
import TagsIcon from 'react-icons/lib/fa/tags';

import Link from '../components/link';
import Notification from '../components/notification/notification'
import Footer from '../components/footer/footer';

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;

  if (tag) {
    return (
      <div>
        <div className='tag-template wrapper'>
          <h1 className='tags-title'>
            {tag} <Notification amount={ post.length } />
          </h1>
          <ul>
            {post.map(({ id, frontmatter, excerpt }) => {
              return (
                <li className='post-preview' key={id}>
                  <h1 className='post-preview-title'>
                    <GatsbyLink to={frontmatter.path}>
                      {frontmatter.title}
                    </GatsbyLink>
                  </h1>
                  <p className='post-preview-text'>
                    {excerpt}
                  </p>
                </li>
              );
            })}
          </ul>
          <Link to="/tags">
            <TagsIcon /> All tags
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
  
  return (
    <div className='wrapper'>
      <h1 className='tags-title'>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`}>
                {tagName}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  );
}
