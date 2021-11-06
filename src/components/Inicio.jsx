import { Link } from "react-router-dom";
import CardHeader from "./CardHeader";

const Inicio = () => {
  const icons = [
    {
      classN: "checkroom",
      text: "Clothings",
    },
    {
      classN: "fas fa-music",
      text: "Music",
    },
    {
      classN: "devices_other",
      text: "Devices",
    },
    {
      classN: "fas fa-basketball-ball",
      text: "Sport",
    },
  ];
  return (
    <>
      <header className='animate__animated header__main animate__zoomIn'>
        <nav className='header__nav'>
          <article className='header__nav-img'>
            <div className='header__nav-menu'>
              <div className='header__nav-menu-logo'></div>
              <div className='header__nav-menu__md'>
                <Link to='/auth' className='header__nav-menu__md-link'>
                  Sign In
                </Link>
                <div className='btn__carts'>My Cart</div>
                <div className='profile'>
                  <i className='fas fa-user-circle'></i>
                </div>
              </div>
            </div>
            <div className='header__main-center'>
              <h1 className='header__main-title'>Encuentra lo que buscas</h1>
              <input
                className='header__main-input'
                type='search'
                placeholder='Buscar articulos'
                autoComplete='off'
              />
            </div>
          </article>
        </nav>
        <section className='header__main-section'>
          <div className='header__main-section-container'>
            {icons.map((obj, i) => (
              <CardHeader key={i} icons={obj} />
            ))}
          </div>
        </section>
      </header>
    </>
  );
};

export default Inicio;
