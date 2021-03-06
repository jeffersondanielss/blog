import React from 'react';
import Link from 'gatsby-link';
import TagsIcon from 'react-icons/lib/fa/tags';

import './tags.css'

export default ({ list = [] }) => {
  if( list.length ) {
    return (
      <ul className="tag-list">
        <TagsIcon /> 
        {
          list.map( tag =>
            <li className='tag-item' key={ tag }>
              <Link to={`/tags/${tag}`}>
                { tag }
              </Link>
            </li>
          )
        }
      </ul>
    );
  }

  return <ul />
}
