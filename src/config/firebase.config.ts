// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCcw5FtpmCRRMGJCrT8NDE-bRytEJwGXTY',
  authDomain: 'club-ecommerce-3d819.firebaseapp.com',
  projectId: 'club-ecommerce-3d819',
  storageBucket: 'club-ecommerce-3d819.appspot.com',
  messagingSenderId: '923704708336',
  appId: '1:923704708336:web:f38af0f320d1ccef890635',
  measurementId: 'G-J5WC4ZBHE0'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
