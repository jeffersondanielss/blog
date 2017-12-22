import React from 'react';
import Link from 'gatsby-link';
import Github from 'react-icons/lib/go/mark-github';
import Home from 'react-icons/lib/go/home';

import './header.css';

export default props =>
  <div className='header'>
    <div className='wrapper'>
      <Link to='/' className='logo'>
        Jefferson Daniel
      </Link>

      <nav className='header-nav'>
        <a className='header-link' href='https://github.com/jeffersondanielss' target='_blank'>
          <Github color='white' />  
        </a>

        <a className='header-link' href='http://jeffersondaniel.com' target='_blank'>
          <Home color='white' />  
        </a>
      </nav>
    </div>
  </div>;
