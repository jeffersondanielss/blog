import React from 'react';
import Helmet from 'react-helmet';

import Tags from '../../components/tags/tags';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';
import About from '../../components/about/about'

import './blog-post.css';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { title, date, tags } = post.frontmatter
  const { next, prev, url } = pathContext;

  return (
    <div>
      <Helmet title={`${title}`} />

      <div className="wrapper">
        <div className="blog-post">

          <div className="blog-post-head">
            <h1 className="blog-post-title">{ title }</h1>
            <h2 className="date">{ date }</h2>
            <Tags list={ tags || [] } />
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      
      <About post={ post.frontmatter } url={ url } />
      <Navigation prev={ prev } next={ next } />
      <Footer />
      
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        tags
        title
      }
    }
  }
`;
