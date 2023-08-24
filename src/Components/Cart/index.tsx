import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

//styles
import * as S from './styles'
import { BsCartCheck } from 'react-icons/bs'

//utils
import { CartContext } from '../../contexts/cart.context'

//components
import CartItem from './components/CartItem'
import CustomButtom from '../CustomButtom/CustomButtom'

const Cart: React.FC = () => {
  const { isVisible, toggleCart, products, productsTotalPrice, productsCount } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

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
            <CustomButtom
              startIcon={<BsCartCheck />}
              onClick={handleGoToCheckoutClick}>
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
