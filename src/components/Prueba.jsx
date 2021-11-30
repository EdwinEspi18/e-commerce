import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CartItem from './CartItem'

export const Prueba = () => {
  const carts = useSelector((state) => state.carts)

  const location1 = useHistory()
  const handleClose = () => {
    location1.replace('/')
    window.location.reload()
  }
  return (
    <div className="modal-container">
      <div className="option_cart">
        <h2>My carts</h2>
        <div>
          <button className="btn-modal" onClick={handleClose}>
            Close
          </button>
          <button className="btn-modal">Checkout</button>
        </div>
      </div>
      <div className="content">
        {carts.map((cart, index) => (
          <CartItem
            key={index + 1}
            price={cart.price}
            description={cart.description}
            rating={cart.rating}
            images={cart.images}
            cantidad={cart.cantidad}
          />
        ))}
      </div>
    </div>
  )
}
