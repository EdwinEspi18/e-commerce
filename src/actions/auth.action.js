import { types } from '../types/types'
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { app } from '../firebase/firebase'

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        const us = { uid: user.uid, name: user.email }
        window.localStorage.setItem('user', JSON.stringify(us))
        dispatch(login(user.uid, user.email))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.displayName = name
        dispatch(register(user.uid, user.displayName, user.email))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const login = (uid, name) => ({
  type: types.login,
  payload: { uid, name },
})
const register = (uid, name, email) => ({
  type: types.register,
  payload: { uid, name },
})

export const startLogout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('user')
    const auth = getAuth(app)
    await signOut(auth)
    dispatch(logout())
  }
}
export const logout = () => ({ type: types.logout })
