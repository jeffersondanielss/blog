import React from 'react';
import Link from '../link';
import ForwardIcon from 'react-icons/lib/fa/chevron-left';
import BackIcon from 'react-icons/lib/fa/chevron-right';
import './navigation.css';

export default ({ prev, next }) =>
  <div className="navigation">
    <div className="wrapper">
      {prev &&
        <Link className="navigation-prev" to={prev.frontmatter.path}>
          {prev.frontmatter.title} <BackIcon />
        </Link>}

      {next &&
        <Link className="navigation-next" to={next.frontmatter.path}>
          <ForwardIcon /> {next.frontmatter.title}
        </Link>}
    </div>
  </div>;
