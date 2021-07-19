import { PageProps } from 'gatsby'
import { TextPageType } from '../../../page-helpers/types'

export interface NotFoundPageProps extends PageProps {
  data: {
    strapiFourOFourPage: {
      Page: TextPageType
    }
  }
}
