import React from 'react'
import { CategoryButtonLink, ListItem } from './styled'
import { CategoryButtonProps } from './types'

const CategoryButton: React.FC<CategoryButtonProps> = ({
  text,
  selected = false,
  onClick = () => {},
}) => {
  if (!text) {
    return null
  }

  return (
    <ListItem>
      <CategoryButtonLink onClick={() => onClick(text)} $selected={selected}>
        {text}
      </CategoryButtonLink>
    </ListItem>
  )
}

export default CategoryButton
