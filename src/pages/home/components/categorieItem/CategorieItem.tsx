import { FunctionComponent } from 'react'

import Category from '../../../../types/category.types'

//styles
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

interface CategoryItemProps {
  category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <>
      <S.CategoryItemContainer backgroundImage={category.imageUrl}>
        <S.CategoryName onClick={handleExploreClick}>
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </S.CategoryName>
      </S.CategoryItemContainer>
    </>
  )
}

export default CategoryItem
