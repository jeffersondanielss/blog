import React from 'react';
import Helmet from 'react-helmet';

import Tags from '../../components/tags/tags';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';

import './blog-post.css';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <div>
      <div className="wrapper">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blog-post">

          <div className="blog-post-head">
            <h1 className="blog-post-title">{post.frontmatter.title}</h1>
            <h2 className="date">{post.frontmatter.date}</h2>
            <Tags list={post.frontmatter.tags || []} />
          </div>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      <Navigation prev={prev} next={next} />
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
