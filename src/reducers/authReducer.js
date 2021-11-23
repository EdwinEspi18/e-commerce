import { types } from '../types/types'

const initialState = {
  isAuth: false,
  user: { uid: '', name: '' },
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, isAuth: true, user: { ...action.payload } }
    case types.register:
      return { ...state, user: action.payload }
    case types.logout:
      return initialState
    default:
      return state
  }
}
