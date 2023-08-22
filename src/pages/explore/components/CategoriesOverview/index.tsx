import React, { useContext, useEffect } from 'react'
import { Container } from './styles'
import { CategoryContext } from '../../../../contexts/category.context'
import CategoryOverview from '../CategoryOverview'

const CategoriesOverview: React.FC = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <>
      <Container>
        {categories.map((category) => (
          <CategoryOverview key={category.id} category={category} />
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
