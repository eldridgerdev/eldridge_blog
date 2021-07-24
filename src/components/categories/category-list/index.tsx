import React, { useState } from 'react'
import { useAllCategories } from '../../../hooks/use-all-categories'
import CategoryButton from '../category-button'
import { CategoryLabel, CategoryListContainer } from './styled'
import { CategoryListProps } from './types'

// @TODO: not sure I like passing the handler through like this, maybe context if not pulling in redux

const Categories: React.FC<CategoryListProps> = ({
  selectedItem,
  makeSelection = () => {},
}) => {
  const categories = useAllCategories()

  if (categories.length <= 1) {
    return null
  }

  return (
    <>
      <CategoryLabel>Filter by Category</CategoryLabel>
      <CategoryListContainer>
        <CategoryButton
          key={'allCategoryButton'}
          text={'All'}
          selected={selectedItem === 'All'}
          onClick={makeSelection}
        />
        {categories.map(({ text }, i) => {
          return (
            <CategoryButton
              key={i}
              text={text}
              selected={selectedItem === text}
              onClick={makeSelection}
            />
          )
        })}
      </CategoryListContainer>
    </>
  )
}

export default Categories
