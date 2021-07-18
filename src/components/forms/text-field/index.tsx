import React from 'react'

import {
  Label,
  LabelSubtext,
  InputField,
  TextAreaField,
  InputContainer,
} from './styled'
import { TextFieldProps } from './types'

export default function TextField({
  type = 'text',
  label,
  labelSubText,
  name,
  onChange = () => {},
  required = false,
  placeholder = '',
}: TextFieldProps) {
  const id = (label || name)
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(/[^a-z]+/g, ''))
    .join('-')

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      {labelSubText && <LabelSubtext>{labelSubText}</LabelSubtext>}
      {type !== 'textarea' && (
        <InputField
          type={type}
          id={id}
          onChange={e => onChange(e.target.value, e)}
          required={required}
        />
      )}
      {type === 'textarea' && (
        <TextAreaField
          id={id}
          onChange={e => onChange(e.target.value, e)}
          required={required}
        />
      )}
    </InputContainer>
  )
}
