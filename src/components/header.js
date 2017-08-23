import React from 'react'
import Link from 'gatsby-link';
import '../css/header.css'

export default props => (
  <div className='header'>
    <div className='wrapper'>
      <Link to="/" className='logo'>
        Jefferson Daniel
      </Link>
    </div>
</div>
)