import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { DiscussionEmbed } from 'disqus-react';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta
          property="og:title"
          content={`${frontmatter.title} | ${siteMetadata.title}`}
        />
        <meta property="og:image" content={frontmatter.thumbnail} />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="481" />
        <meta property="og:description" content={frontmatter.metaDescription} />
        <meta
          name="twitter:description"
          content={frontmatter.metaDescription}
        />
        <meta name="twitter:image" content={frontmatter.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yyna_kwon" />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
      <br />
      <br />
      <br />
      <br />
      <DiscussionEmbed
        shortname="yyna-dev"
        identifier={frontmatter.path.split('/')[1]}
        url={`https://yyna.dev${frontmatter.path}`}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
