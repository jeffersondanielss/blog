import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/link';
import '../components/button/button.css';
import '../css/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts wrapper">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="post-preview" key={ post.id }>
              <div className="post-preview-head">
                <h1 className="post-preview-title">
                  <GatsbyLink to={ post.frontmatter.path }>
                    { post.frontmatter.title }
                  </GatsbyLink>
                  <p className="date">
                    { post.frontmatter.date }
                  </p>
                </h1>
              </div>
              <p className="post-preview-text">
                { post.excerpt }
              </p>
              <Link className='btn' to={post.frontmatter.path}>Read more</Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 350)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
