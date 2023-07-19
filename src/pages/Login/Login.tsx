import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

//components
import CustomButtom from '../../Components/CustomButtom/CustomButtom'
import Header from '../../Components/Header/Header'

//styles
import CustomInput from '../../Components/CustomInput/CustomInput'
import * as S from './styles'

const Login = () => {
  return (
    <>
      <Header />

      <S.LoginContainer>
        <S.LoginContent>
          <S.LoginHeadline>Entre com a sua conta</S.LoginHeadline>
          <CustomButtom startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButtom>
          <S.LoginSubtitle>ou entre com o seu e-mail</S.LoginSubtitle>
          <S.LoginInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder="Digite seu e-mail" />
          </S.LoginInputContainer>
          <S.LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder="Digite sua senha" />
          </S.LoginInputContainer>
          <CustomButtom startIcon={<FiLogIn size={18} />}>Entrar</CustomButtom>
        </S.LoginContent>
      </S.LoginContainer>
    </>
  )
}

export default Login
