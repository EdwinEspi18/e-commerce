import { addDoc, collection, getDocs, query } from '@firebase/firestore'
import { db } from '../firebase/firebase'
import { productos } from '../helpers/products'
import { types } from '../types/types'

export const startAddProductToCart = (idProd) => {
  return async (dispatch, state) => {
    const { uid } = state().auth.user
    const product = productos.find((prod) => prod.id === idProd)
    const collectRef = await collection(db, `${uid}/carts/products`)
    const ds = await addDoc(collectRef, product)
    delete product.id
    product.id = ds.id
    dispatch(AddProductToCart(product))
  }
}
export const getCarts = () => {
  return async (dispatch, state) => {
    const { uid } = state().auth.user
    try {
      const docSnapshot = await getDocs(
        query(collection(db, `${uid}/carts/products`))
      )
      docSnapshot.forEach((doc) => {
        dispatch(AddProductToCart(doc.data()))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const AddProductToCart = (product) => ({
  type: types.addProduct,
  payload: { ...product },
})
