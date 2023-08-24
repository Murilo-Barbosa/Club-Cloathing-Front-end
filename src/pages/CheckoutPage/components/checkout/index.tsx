import React, { useContext, useState } from 'react'

//utills
import { CartContext } from '../../../../contexts/cart.context'

//components
import { BsBagCheck } from 'react-icons/bs'

//styles
import * as S from './styles'
import CustomButtom from '../../../../Components/CustomButtom/CustomButtom'
import CartItem from '../../../../Components/Cart/components/CartItem'
import axios from 'axios'
import Loading from '../../../../Components/loading'

const Checkout: React.FC = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-checkout-session`,
        {
          products
        }
      )
      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading && <Loading />}
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

            <CustomButtom
              startIcon={<BsBagCheck />}
              onClick={handleFinishPurchaseClick}>
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
