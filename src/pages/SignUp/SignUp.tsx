import { useForm } from 'react-hook-form'
import validator from 'validator'

//components
import { FiLogIn } from 'react-icons/fi'
import CustomButtom from '../../Components/CustomButtom/CustomButtom'
import CustomInput from '../../Components/CustomInput/CustomInput'
import Header from '../../Components/Header/Header'

//styles
import ErrorMessage from '../../Components/CustomInput/Components/ErrorMessage'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './styles'

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  const passwordValue = watch('password')

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              placeholder="Digite seu nome"
              hasError={!!errors?.name}
              {...register('name', {
                required: true
              })}
            />
            {errors?.name?.type === 'required' && (
              <ErrorMessage>O nome é obrigatório!</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              placeholder="Digite seu sobrenome"
              hasError={!!errors?.surname}
              {...register('surname', {
                required: true
              })}
            />
            {errors?.surname?.type === 'required' && (
              <ErrorMessage>O sobrenome é obrigatório!</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder="Digite seu E-mail"
              hasError={!!errors?.email}
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
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder="Digite sua senha"
              hasError={!!errors?.password}
              type="password"
              {...register('password', {
                required: true
              })}
            />
            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de senha</p>
            <CustomInput
              placeholder="Confirme sua senha"
              hasError={!!errors?.passwordConfirm}
              type="password"
              {...register('passwordConfirm', {
                required: true,
                validate: (value) => {
                  return value === passwordValue
                }
              })}
            />
            {errors?.passwordConfirm?.type === 'required' && (
              <ErrorMessage>A confirmação de senha é obrigatória.</ErrorMessage>
            )}
            {errors?.passwordConfirm?.type === 'validate' && (
              <ErrorMessage>As senhas não são iguais!</ErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButtom
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Criar Conta
          </CustomButtom>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}
export default SignUp
