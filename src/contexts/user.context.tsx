import { FunctionComponent, createContext, useState } from 'react'
import User from '../types/user.types'

interface IUserContext {
  children?: React.ReactNode
  currentUser?: User | null
  isAuthenticated?: boolean
  loginUser?: (user: User) => void
  logoutUser?: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

const UserContextProvider: FunctionComponent<IUserContext> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
