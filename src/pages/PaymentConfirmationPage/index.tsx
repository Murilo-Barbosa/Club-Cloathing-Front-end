import React, { useEffect, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate, useSearchParams } from 'react-router-dom'

//components
import Header from '../../Components/Header/Header'
import CustomButtom from '../../Components/CustomButtom/CustomButtom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'

//styles
import * as S from './styles'
import Colors from '../../theme/theme.colors'

const PaymentConfirmationPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'
  const navigate = useNavigate()
  const { clearProducts } = useContext(CartContext)

  const handleNavigateHomeClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  return (
    <>
      <Header />
      <S.PaymentConfirmationContainer>
        <S.PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.sucess} />
              <p>Sua compra foi finalizada com sucesso</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor tente
                novamente
              </p>
            </>
          )}

          <CustomButtom
            startIcon={<AiOutlineHome />}
            onClick={handleNavigateHomeClick}>
            Ir para a Página Inicial
          </CustomButtom>
        </S.PaymentConfirmationContent>
      </S.PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
