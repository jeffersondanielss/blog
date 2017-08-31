import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook-official'
import Twitter from 'react-icons/lib/fa/twitter'
import Linkedin from 'react-icons/lib/fa/linkedin'
import me from '../../images/me.jpg'

import './about.css'

export default ({ post, url }) => (
  <div className='wrapper'>
    <div className='about'>

      <img className='avatar-image' src={ me } />
      <div className='avatar-info'>
        <h2 className='avatar-name'>Jefferson Daniel</h2>
        <p className='avatar-description'>just a programmer</p>
      </div>

      <div className='social-media'>
        <span className='social-media-label'>Compartilhe: </span>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}${post.path}`} onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
          <Facebook color="#4267B2" />
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${url}${post.path}&hashtags=${post.tags}`} target='_blank' onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
          <Twitter color="#0FA7C2" />
        </a>
        <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}${post.path}&title=${post.title}`} target='_blank'>
          <Linkedin color="#006699" />
        </a>
      </div>
    </div>
  </div>
)