import { useDispatch } from 'react-redux'
import { startAddProductToCart } from '../actions/cart.action'
import { productos } from '../helpers/products'

const CardItem = () => {
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(startAddProductToCart(id))
  }
  return productos.map(({ description, id, images, rating, price }) => (
    <article className="card__main" key={id + 1}>
      <div className="card__main-img">
        <img src={images} alt="IMAGES" />
      </div>
      <div className="card__main-description">{description}</div>
      <p className="card__prices">${price}</p>
      <div className="card__main-rating">
        <span>{rating}</span>
        <button className="card__main-btn" onClick={() => handleClick(id)}>
          Add to Cart
        </button>
      </div>
    </article>
  ))
}

export default CardItem
