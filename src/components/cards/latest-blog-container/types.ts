import { BlogPost } from '../../../hooks/use-all-posts/types'
import { BlogCardProps } from '../blog-card/types'

export type LatestBlogContainerProps = {
  featuredPost?: BlogPost
  multiPost?: boolean
  nextPost?: BlogPost
  previousPost?: BlogPost
}

export type CardProps = {
  cardPost: BlogPost
  full?: boolean
}

export type ListItemProps = {
  $full?: boolean
}
