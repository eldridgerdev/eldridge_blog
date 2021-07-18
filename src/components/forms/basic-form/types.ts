import { DocumentNode } from '@apollo/client'

export type FormComponentProps = {
  post_id?: string
  mutation?: DocumentNode
  messagePlaceholder: string
  emailSubText?: string
  submitMessage: string
  netlifyPost?: boolean
  netlifyPostName?: string
  titleText?: string
}
