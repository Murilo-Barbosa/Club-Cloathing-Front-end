import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//Styles
import * as S from './styles'

//Utilities
import { db } from '../../../../config/firebase.config'
import { categoryConverter } from '../../../../converters/firestore.converters'
import Category from '../../../../types/category.types'
import CategoryItem from '../categorieItem/CategorieItem'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const categoriesFromFirestore: Category[] = []
  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
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
