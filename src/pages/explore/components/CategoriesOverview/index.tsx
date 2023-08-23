import React, { useContext, useEffect } from 'react'
import { Container } from './styles'
import { CategoryContext } from '../../../../contexts/category.context'
import CategoryOverview from '../CategoryOverview'
import Loading from '../../../../Components/loading'

const CategoriesOverview: React.FC = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />
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
