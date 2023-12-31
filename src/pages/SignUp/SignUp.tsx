import { useContext, useEffect, useState } from 'react'

import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

//components
import { FiLogIn } from 'react-icons/fi'
import Header from '../../Components/Header/Header'
import CustomInput from '../../Components/CustomInput/CustomInput'
import CustomButtom from '../../Components/CustomButtom/CustomButtom'
import ErrorMessage from '../../Components/CustomInput/Components/ErrorMessage'

//utilities
import { UserContext } from '../../contexts/user.context'

//styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './styles'
import { useNavigate } from 'react-router-dom'
import Loading from '../../Components/loading'

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError
  } = useForm<SignUpForm>()

  const { isAuthenticated } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const passwordValue = watch('password')

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true)
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: 'firebase'
      })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      {isLoading && <Loading />}

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              placeholder="Digite seu nome"
              hasError={!!errors?.firstName}
              {...register('firstName', {
                required: true
              })}
            />
            {errors?.firstName?.type === 'required' && (
              <ErrorMessage>O nome é obrigatório!</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              placeholder="Digite seu sobrenome"
              hasError={!!errors?.lastName}
              {...register('lastName', {
                required: true
              })}
            />
            {errors?.lastName?.type === 'required' && (
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
            {errors?.email?.type === 'alreadyInUse' && (
              <ErrorMessage>Este email já está em uso</ErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder="Digite sua senha"
              hasError={!!errors?.password}
              type="password"
              {...register('password', {
                required: true,
                minLength: 6
              })}
            />
            {errors?.password?.type === 'required' && (
              <ErrorMessage>A senha é obrigatória.</ErrorMessage>
            )}
            {errors?.password?.type === 'minLength' && (
              <ErrorMessage>
                A senha deve ter no minimo 6 caracteres.
              </ErrorMessage>
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
