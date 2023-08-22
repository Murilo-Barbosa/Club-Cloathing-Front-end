import React, { useContext, useEffect } from 'react'
import { Container } from './styles'
import { CategoryContext } from '../../../../contexts/category.context'

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
          <p key={category.id}>{category.displayName}</p>
        ))}
      </Container>
    </>
  )
}

export default CategoriesOverview
