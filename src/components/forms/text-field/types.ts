type EventType =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>

export interface TextFieldProps {
  type?: string
  label?: string
  labelSubText?: string
  name: string
  onChange: (val: string, e: EventType) => void
  required?: boolean
  placeholder: string
}
