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

import { signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { auth, db, googleProvider } from '../../config/firebase.config'
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  const handleSignInWithGooglePress = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, googleProvider)

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )
      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
        console.log(user)
      }
    } catch (error) {}
  }
  return (
    <>
      <Header />

      <S.LoginContainer>
        <S.LoginContent>
          <S.LoginHeadline>Entre com a sua conta</S.LoginHeadline>
          <CustomButtom
            onClick={handleSignInWithGooglePress}
            startIcon={<BsGoogle size={18} />}>
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
