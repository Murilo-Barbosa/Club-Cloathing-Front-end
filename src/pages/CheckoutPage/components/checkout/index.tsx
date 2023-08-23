import React, { useContext } from 'react'

//utills
import { CartContext } from '../../../../contexts/cart.context'

//components
import { BsBagCheck } from 'react-icons/bs'

//styles
import * as S from './styles'
import CustomButtom from '../../../../Components/CustomButtom/CustomButtom'
import CartItem from '../../../../Components/Cart/components/CartItem'

const Checkout: React.FC = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  return (
    <>
      <S.CheckoutContainer>
        <S.CheckoutTitle>Checkout</S.CheckoutTitle>

        {products.length > 0 ? (
          <>
            <S.CheckoutProducts>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </S.CheckoutProducts>

            <S.CheckoutTotal>Total: R${productsTotalPrice}</S.CheckoutTotal>

            <CustomButtom startIcon={<BsBagCheck />}>
              Finalizar Compra
            </CustomButtom>
          </>
        ) : (
          <p>Seu carrinho está vazio</p>
        )}
      </S.CheckoutContainer>
    </>
  )
}

export default Checkout
