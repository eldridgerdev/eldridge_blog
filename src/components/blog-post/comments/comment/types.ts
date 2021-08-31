import { CommentType } from '../../../../hooks/use-all-posts/types'

export type CommentProps = CommentType

export interface MainCommentProps {
  date?: string
  time?: string
  username: string
  commentText: string
}
