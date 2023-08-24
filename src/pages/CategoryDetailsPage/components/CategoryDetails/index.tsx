import React, { useEffect, useState } from 'react'
import { db } from '../../../../config/firebase.config'
import Category from '../../../../types/category.types'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { categoryConverter } from '../../../../converters/firestore.converters'

//components
import { BiChevronLeft } from 'react-icons/bi'
import Loading from '../../../../Components/loading'

//styles
import * as S from './styles'
import ProductItem from '../../../explore/components/ProductItem'
import { useNavigate } from 'react-router-dom'

interface ICategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: React.FC<ICategoryDetailsProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handlebackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])
  if (isLoading) return <Loading />

  return (
    <>
      <S.Container>
        <S.CategoryTitle>
          <S.IconContainer onClick={handlebackClick}>
            <BiChevronLeft size={36} />
          </S.IconContainer>
          <p>Explorar {category?.displayName}</p>
        </S.CategoryTitle>
        <S.ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </S.ProductsContainer>
      </S.Container>
    </>
  )
}

export default CategoryDetails
