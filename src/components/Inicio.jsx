import { useDispatch, useSelector } from 'react-redux'
import { icons } from '../helpers/icons'
import CardHeader from './CardHeader'
import { startLogout } from '../actions/auth.action'
import { types } from '../types/types'
import { Link } from 'react-router-dom'

const Inicio = () => {
  const dispatch = useDispatch()
  const {
    user: { name },
  } = useSelector((state) => state.auth)
  const handleClick = () => {
    dispatch(startLogout())
    dispatch({ type: types.removeProduct })
  }
  return (
    <>
      <header className="animate__animated header__main animate__zoomIn">
        <nav className="header__nav">
          <article className="header__nav-img">
            <div className="header__nav-menu">
              <div className="header__nav-menu-logo" />
              <div className="header__nav-menu__md">
                <button className="btn__logout" onClick={handleClick}>
                  Logout
                </button>
                <div className="btn__carts">
                  <Link to="/carts">My Cart</Link>
                </div>
                <div>
                  <p>{name}</p>
                </div>
              </div>
            </div>
            <div className="header__main-center">
              <h1 className="header__main-title">Encuentra lo que buscas</h1>
              <input
                className="header__main-input"
                type="search"
                placeholder="Buscar articulos"
                autoComplete="off"
              />
            </div>
          </article>
        </nav>
        <section className="header__main-section">
          <div className="header__main-section-container">
            {icons.map((obj, i) => (
              <CardHeader key={i} icons={obj} />
            ))}
          </div>
        </section>
      </header>
    </>
  )
}

export default Inicio
