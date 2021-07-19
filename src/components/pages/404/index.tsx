import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../layout'
import SEO from '../../seo'
import theme from '../../../utils/theme'
import { NotFoundPageProps } from './types'
import { HomeButton, HomeText } from './styled'

const NotFoundPage = ({ data, location }: NotFoundPageProps) => {
  const pageData = data.strapiFourOFourPage.Page.Page
  const { SiteTitle: title, HeroText: text, HeroImage: image } = pageData

  return (
    <Layout heroText={text} heroOverride={image?.childImageSharp.fluid}>
      <SEO title={title} />
      <h1>Not Found</h1>
      <p>
        {data.strapiFourOFourPage.Page.Content || 'This page does not exist.'}
      </p>
      <HomeButton to="/">
        <HomeText>
          <FontAwesomeIcon icon={faHome} style={{ color: theme.colors.main }} />
        </HomeText>
      </HomeButton>
    </Layout>
  )
}

export default NotFoundPage
