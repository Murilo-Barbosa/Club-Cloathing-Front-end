import React, { useContext } from 'react'

import * as S from './styles'
import { BsCartCheck } from 'react-icons/bs'

//components
import CustomButtom from '../CustomButtom/CustomButtom'
import { CartContext } from '../../contexts/cart.context'

const Cart: React.FC = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <>
      <S.CartContainer isVisible={isVisible}>
        <S.CartEscapeArea onClick={toggleCart} />
        <S.CartContent>
          <S.CartTitle>Seu Carrinho</S.CartTitle>
          {/* Produtos */}
          <S.CartTotal>Total: R$500</S.CartTotal>
          <CustomButtom startIcon={<BsCartCheck />}>
            Ir para o Checkout
          </CustomButtom>
        </S.CartContent>
      </S.CartContainer>
    </>
  )
}

export default Cart
