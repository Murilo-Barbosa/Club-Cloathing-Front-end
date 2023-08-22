import React from 'react'

//styles
import * as S from './styles'

//utilities
import Product from '../../../../types/product.types'

interface IProductItem {
  product: Product
}

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  return (
    <>
      <S.ProductContainer>
        <S.ProductImage imageUrl={product.imageUrl} />

        <S.ProductInfo>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </S.ProductInfo>
      </S.ProductContainer>
    </>
  )
}

export default ProductItem
