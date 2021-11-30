import { Link } from 'react-router-dom'
import start from '../img/login-img.svg'

const Start = () => {
  return (
    <div className="start__main">
      <div className="start__main-container-img">
        <img className="start__main-img" src={start} alt="Login" />
      </div>
      <div className="start__main-paragraph">
        <h1>¡Ven y disfruta de nuestro descuentos!</h1>
        <p>
          Este e-commerce esta hecho con el proposito de practicar mis
          conocimientos aprendido de React.js
        </p>
      </div>
      <div className="start__main-buttons">
        <Link className="start__main-btn btn-register" to="/auth/register">
          Registrarse
        </Link>
        <Link className="start__main-btn btn-login" to="/auth/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default Start
