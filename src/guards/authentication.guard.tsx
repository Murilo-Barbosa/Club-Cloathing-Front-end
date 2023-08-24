import React, { useContext, useEffect } from 'react'

//utills

import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/user.context'
import Header from '../Components/Header/Header'
import Loading from '../Components/loading'
//components

interface IAuthenticationProps {
  children: React.ReactNode
}

const AuthenticationGuard: React.FC<IAuthenticationProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar está pagina. Você será redirecionado para a pagina de login." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
