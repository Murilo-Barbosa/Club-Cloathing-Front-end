import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//utilities
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { collection, getDocs, query, where } from 'firebase/firestore'

//Pages
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      if (logoutUser) {
        return logoutUser()
      }
    }

    if (user !== null) {
      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(collection(db, 'users'), where('id', '==', user.uid))
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()
        if (loginUser) {
          return loginUser(userFromFirestore as any)
        }
      }
    }
  })

  console.log({ isAuthenticated })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
