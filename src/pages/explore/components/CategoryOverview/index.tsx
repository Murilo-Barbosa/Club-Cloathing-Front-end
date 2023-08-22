import React from 'react'
import Category from '../../../../types/category.types'

import * as S from './styles'
import ProductItem from '../ProductItem'

interface ICategoryOverviewProps {
  category: Category
}
const CategoryOverview: React.FC<ICategoryOverviewProps> = ({ category }) => {
  return (
    <>
      <S.CategoryContainer>
        <S.CategoryTitle>{category.displayName}</S.CategoryTitle>
        <S.ProductsContainer>
          {category.products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </S.ProductsContainer>
      </S.CategoryContainer>
    </>
  )
}

export default CategoryOverview
