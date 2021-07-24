import { ImageWidthOptions } from '../../../../hooks/use-all-posts/types'

export default function getWidth(width?: ImageWidthOptions) {
  switch (width) {
    case ImageWidthOptions.SMALL: {
      return '50%'
    }
    case ImageWidthOptions.MEDIUM: {
      return '75%'
    }
    case ImageWidthOptions.LARGE: {
      return '100%'
    }
    default: {
      return '50%'
    }
  }
}
