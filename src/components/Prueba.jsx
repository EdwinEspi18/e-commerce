import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export const Prueba = ({ closeModal }) => {
  const carts = useSelector((state) => state.carts)
  return (
    <div className="modal-container">
      <h2>My carts</h2>
      <hr />
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
      <button className="btn-modal" onClick={closeModal}>
        Close
      </button>
    </div>
  )
}
Prueba.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
