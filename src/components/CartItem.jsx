import PropTypes from 'prop-types'

const CartItem = ({ price, description, rating, images, cantidad }) => {
  return (
    <>
      <div className="modal-main">
        <div>
          <img src={images} alt="product" />
        </div>
        <h2>Price: {price}</h2>
        <h3>Description: {description}</h3>
        <h4>Rating: {rating}</h4>
        <h4>Cantidad: X {cantidad}</h4>
      </div>
      <hr />
    </>
  )
}
CartItem.propTypes = {
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  cantidad: PropTypes.string.isRequired,
}
export default CartItem
