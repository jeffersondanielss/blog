import React from 'react';
import PostsOfTag from './postsOfTag'
import AllTags from './allTags'


export default function Tags({ pathContext }) {
  if ( pathContext.tag ) {
    return <PostsOfTag postInfo={ pathContext } />
  }
  
  return <AllTags postInfo={ pathContext } />
}
