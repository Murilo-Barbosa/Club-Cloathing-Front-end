import { FunctionComponent, useContext, useState } from 'react'
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
import { userConverter } from './converters/firestore.converters'
import Loading from './Components/loading'
import ExplorePage from './pages/explore'
import CategoryDetailsPage from './pages/CategoryDetailsPage'
import Cart from './Components/Cart'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setIsInitializing] = useState(true)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user

    if (isSigningOut) {
      if (logoutUser) {
        logoutUser()
        return setIsInitializing(false)
      }
    }

    if (user !== null) {
      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapshot.docs[0]?.data()
        if (loginUser) {
          loginUser(userFromFirestore)
          return setIsInitializing(false)
        }
      }
    }
    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>

      <Cart />
    </BrowserRouter>
  )
}

export default App
