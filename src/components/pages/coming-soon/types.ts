import { PageProps } from 'gatsby'
import { TextPageType } from '../../../page-helpers/types'

export interface ComingSoonPageProps extends PageProps {
  data: {
    strapiComingSoon: {
      Page: TextPageType
    }
  }
}
