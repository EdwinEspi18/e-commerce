import { types } from '../types/types'

const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return [...state, action.payload]
    case types.removeProduct:
      return initialState
    default:
      return state
  }
}
