import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <a
          href="https://twitter.com/yyna_kwon"
          className="button -primary"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/yyna"
          className="button -primary"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/jungin/"
          className="button -primary"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    )}
  />
);
