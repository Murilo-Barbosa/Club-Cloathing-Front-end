import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'

//components
import CustomButtom from '../../Components/CustomButtom/CustomButtom'
import ErrorMessage from '../../Components/CustomInput/Components/ErrorMessage'
import CustomInput from '../../Components/CustomInput/CustomInput'
import Header from '../../Components/Header/Header'

//styles
import * as S from './styles'

import { useForm } from 'react-hook-form'
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }
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
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <ErrorMessage>O email é obrigatório.</ErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Por favor,insira um email valido!</ErrorMessage>
            )}
          </S.LoginInputContainer>
          <S.LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}
          </S.LoginInputContainer>
          <CustomButtom
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButtom>
        </S.LoginContent>
      </S.LoginContainer>
    </>
  )
}

export default Login
