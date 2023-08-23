import React, { useContext } from 'react'

//styles
import * as S from './styles'
import { BsCartPlus } from 'react-icons/bs'

//utilities
import Product from '../../../../types/product.types'
import CustomButtom from '../../../../Components/CustomButtom/CustomButtom'
import { CartContext } from '../../../../contexts/cart.context'

interface IProductItem {
  product: Product
}

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <>
      <S.ProductContainer>
        <S.ProductImage imageUrl={product.imageUrl}>
          <CustomButtom
            startIcon={<BsCartPlus />}
            onClick={handleAddToCartClick}>
            Adicionar ao Carrinho
          </CustomButtom>
        </S.ProductImage>

        <S.ProductInfo>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </S.ProductInfo>
      </S.ProductContainer>
    </>
  )
}

export default ProductItem
