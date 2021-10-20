import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../layout'
import SEO from '../../seo'
import theme from '../../../utils/theme'
import { ComingSoonPageProps } from './types'
import { HomeButton, HomeText } from './styled'

// @TODO: Can probably just remove this page

const ComingSoon = ({ data, location }: ComingSoonPageProps) => {
  const pageData = data.strapiComingSoon.Page

  return <div></div>
  // return (
  //   <Layout
  //     heroText={pageData.Page.HeroText}
  //     heroOverride={pageData.Page.HeroImage?.childImageSharp.fluid}>
  //     <SEO title={pageData.Page.SiteTitle} />
  //     <h1>Coming Soon</h1>
  //     <p>
  //       {pageData.Content || 'This page does not exist yet, check back later'}
  //     </p>
  //     <HomeButton to="/">
  //       <HomeText>
  //         <FontAwesomeIcon icon={faHome} style={{ color: theme.colors.main }} />
  //       </HomeText>
  //     </HomeButton>
  //   </Layout>
  // )
}

export default ComingSoon
