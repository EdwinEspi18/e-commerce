import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAI6OQY0VZxsCH0jJxqkqrcMJVOnT5AuOI',
  authDomain: 'e-commerce-8e34c.firebaseapp.com',
  projectId: 'e-commerce-8e34c',
  storageBucket: 'e-commerce-8e34c.appspot.com',
  messagingSenderId: '201432095738',
  appId: '1:201432095738:web:e71601f701e5c89bc5a243',
  measurementId: 'G-XV85YL16EQ',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const analytics = getAnalytics(app)
export { db, analytics, app }
