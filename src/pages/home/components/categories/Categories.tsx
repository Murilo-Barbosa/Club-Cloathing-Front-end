import { useEffect, useState, useContext } from 'react'

//Styles
import * as S from './styles'

//Utilities

import CategoryItem from '../categorieItem/CategorieItem'
import { CategoryContext } from '../../../../contexts/category.context'
import Loading from '../../../../Components/loading'

const Categories = () => {
  const { fetchCategories, categories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <S.categoriesContainer>
      <S.categoriesContent>
        {isLoading && <Loading />}
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </S.categoriesContent>
    </S.categoriesContainer>
  )
}

export default Categories
