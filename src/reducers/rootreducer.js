import { combineReducers } from 'redux'
import { cartReducer } from './cartReducedr'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  carts: cartReducer
})
