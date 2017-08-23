import React from 'react';
import Helmet from 'react-helmet';
import TagsIcon from 'react-icons/lib/fa/tags';

import Tags from '../components/tags/tags';
import Footer from '../components/footer/footer'
import Navigation from '../components/navigation/navigation'

import '../css/blog-post.css';
import '../css/code.css';

export default function Template({ data, pathContext }) {
  
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <div>
      <div className="wrapper">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1 className="title">{ post.frontmatter.title }</h1>
          <h2 className="date">{ post.frontmatter.date }</h2>
          <TagsIcon /> <Tags list={ post.frontmatter.tags || [] } />

          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />

          <Navigation prev={ prev } next={ next } />          
        </div>
      </div>

      <Footer />
    </div>
  );
  
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;
