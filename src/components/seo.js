/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import ReactGA from 'react-ga';

function SEO({ description, lang, meta, title, image }) {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        defaultImage: file(relativePath: { regex: "/entrance-view/" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  )
  
  useEffect(() => {
    console.log('init')
    ReactGA.initialize(process.env.GATSBY_GA_CODE);
  }, []);

  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage.childImageSharp.resize
  let path; 
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  }
  ReactGA.initialize(process.env.GATSBY_GA_CODE);
  ReactGA.pageview(path);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}${metaImage.src}`,
        },
        {
          property: 'og:image:width',
          content: metaImage.width,
        },
        {
          property: 'og:image:height',
          content: metaImage.height,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
   />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
