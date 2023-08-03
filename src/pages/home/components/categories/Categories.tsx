import axios from 'axios'
import { useEffect, useState } from 'react'

//Styles
import * as S from './styles'

//Utilities
import env from '../../../../config/env.config'
import Category from '../../../../types/category.types'
import CategoryItem from '../categorieItem/CategorieItem'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}api/category`)
      setCategories(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <S.categoriesContainer>
      <S.categoriesContent>
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
