import { FunctionComponent } from 'react'

import Category from '../../../../types/category.types'

//styles
import * as S from './styles'

interface CategoryItemProps {
  category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <>
      <S.CategoryItemContainer backgroundImage={category.imageUrl}>
        <S.CategoryName>
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </S.CategoryName>
      </S.CategoryItemContainer>
    </>
  )
}

export default CategoryItem
