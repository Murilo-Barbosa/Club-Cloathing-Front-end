import axios from 'axios'
import { useEffect, useState } from 'react'

//Utilities
import env from '../../../config/env.config'
import Category from '../../../types/category.types'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }
  console.log(categories)
  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content"></div>
    </div>
  )
}

export default Categories
