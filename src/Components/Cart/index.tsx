import React, { useContext } from 'react'

import * as S from './styles'
import { BsCartCheck } from 'react-icons/bs'

//components
import CustomButtom from '../CustomButtom/CustomButtom'
import { CartContext } from '../../contexts/cart.context'
import CartItem from './components/CartItem'

const Cart: React.FC = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

  return (
    <>
      <S.CartContainer isVisible={isVisible}>
        <S.CartEscapeArea onClick={toggleCart} />
        <S.CartContent>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          {products.map((product) => (
            <CartItem product={product} />
          ))}
          {productsCount > 0 && (
            <S.CartTotal>Total: R${productsTotalPrice}</S.CartTotal>
          )}

          {productsCount > 0 && (
            <CustomButtom startIcon={<BsCartCheck />}>
              Ir para o Checkout
            </CustomButtom>
          )}

          {productsCount === 0 && <p>Seu carrinho está vazio</p>}
        </S.CartContent>
      </S.CartContainer>
    </>
  )
}

export default Cart
