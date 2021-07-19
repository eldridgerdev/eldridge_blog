import { PageProps } from 'gatsby'
import { TextPageType } from '../../../page-helpers/types'

export interface ContactPageProps extends PageProps {
  data: {
    strapiContactUsPage: {
      Page: TextPageType
    }
  }
}
