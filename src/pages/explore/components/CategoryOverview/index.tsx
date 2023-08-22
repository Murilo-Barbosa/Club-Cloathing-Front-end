import React from 'react'
import Category from '../../../../types/category.types'

import * as S from './styles'

interface ICategoryOverviewProps {
  category: Category
}
const CategoryOverview: React.FC<ICategoryOverviewProps> = ({ category }) => {
  return (
    <>
      <S.CategoryContainer>
        <S.CategoryTitle>{category.displayName}</S.CategoryTitle>
        <S.ProductsContainer></S.ProductsContainer>
      </S.CategoryContainer>
    </>
  )
}

export default CategoryOverview
