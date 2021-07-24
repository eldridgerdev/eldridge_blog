/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql, PageProps } from 'gatsby'

// import GlobalStyles from '../global-style'

const defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

type SEOProps = {
  title: string
} & Partial<typeof defaultProps>

interface SEOQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      social: {
        twitter: string
      }
    }
  }
}

const SEO: React.FC<SEOProps> = ({
  description = defaultProps.description,
  lang = defaultProps.lang,
  meta = defaultProps.meta,
  title,
}) => {
  const { site }: SEOQueryProps = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaProperties = [
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
  ]

  if (site.siteMetadata?.social?.twitter) {
    metaProperties.push(
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.social.twitter,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      }
    )
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaProperties.concat(meta)}
    />
  )
}

export default SEO
