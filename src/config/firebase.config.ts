import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  measurementId: 'G-J5WC4ZBHE0',
  projectId: 'club-ecommerce-3d819',
  messagingSenderId: '923704708336',
  storageBucket: 'club-ecommerce-3d819.appspot.com',
  apiKey: 'AIzaSyCcw5FtpmCRRMGJCrT8NDE-bRytEJwGXTY',
  appId: '1:923704708336:web:f38af0f320d1ccef890635',
  authDomain: 'club-ecommerce-3d819.firebaseapp.com'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
