import { PageProps } from 'gatsby'
import { MetaType, PageType } from '../../../page-helpers/types'

// @TODO: Update featured post
export interface HomePageProps extends PageProps {
  data: {
    strapiIndexPage: {
      Page: PageType
      metaGroup?: MetaType
      description: string
      multiPost: boolean
    }
    strapiFeaturedPost: any
  }
}

export interface LatestContainerProps {
  $multipost?: boolean
}
