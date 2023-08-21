import { db } from '../config/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { createContext, useState, useEffect, ReactNode } from 'react'
import { categoryConverter } from '../converters/firestore.converters'

import Category from '../types/category.types'

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: async () => {}
})

interface CategoryContextProviderProps {
  children: ReactNode
}

const CategoryContextProvider: React.FC<CategoryContextProviderProps> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
