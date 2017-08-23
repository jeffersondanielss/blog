import React from 'react'
import Link from '../Link';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import './navigation.css';

export default ({ prev, next }) => (
  <div className="navigation">
    {
      prev &&
      <Link className="navigation-prev" to={ prev.frontmatter.path }>
        <BackIcon /> { prev.frontmatter.title }
      </Link>
    }

    {
      next &&
      <Link className="navigation-next" to={ next.frontmatter.path }>
        { next.frontmatter.title } <ForwardIcon />
      </Link>
    }
  </div>
)