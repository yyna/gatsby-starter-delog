import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import PostLink from '../../components/post-link';

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content="BLOG | { yyna.dev }" />
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta
          property="og:image"
          content="https://yyna.dev/assets/_thumbnail.png"
        />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="481" />
        <meta property="og:description" content="BLOG | { yyna.dev }" />
        <meta name="twitter:description" content="BLOG | { yyna.dev }" />
        <meta
          name="twitter:image"
          content="https://yyna.dev/assets/_thumbnail.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yyna_kwon" />
      </Helmet>
      <h2>🎄 Posts ⛄️</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query blogIndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
