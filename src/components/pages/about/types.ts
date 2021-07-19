import { PageProps } from 'gatsby'
import { TextPageType } from '../../../page-helpers/types'

export interface AboutPageProps extends PageProps {
  data: {
    strapiAboutPage: {
      Page: TextPageType
    }
  }
}
