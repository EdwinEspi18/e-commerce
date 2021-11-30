import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth.action'
import { useState } from 'react'

const initForm = { email: '', password: '' }

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [{ email, password }, handleInputChange] = useForm(initForm)
  const [eye, setEye] = useState('password')
  const handleLogin = (e) => {
    if (email === '' || password === '') {
      return null
    }
    dispatch(startLogin(email, password))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleEye = () => {
    setEye(eye === 'password' ? 'text' : 'password')
  }

  return (
    <article className="login__article">
      <Link to="/auth" className="login__btn-back">
        <i className="fas fa-arrow-circle-left" />
      </Link>
      <div className="login__article-paragraph">
        <h1>Vamos a iniciar sesión.</h1>
        <h5>Bienvenido de nuevo. ¡Te han extrañado!</h5>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__form-input"
          type="email"
          placeholder="Su Correo Electronico"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <div className="pass">
          <input
            className="login__form-input"
            type={eye}
            placeholder="Su Contraseña"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <button className="login__article-btn-eye" onClick={handleEye}>
            <i className="far fa-eye" />
          </button>
        </div>
      </form>
      <div className="container-btn">
        <div className="links">
          <h5>¿No tienes una cuenta?</h5>
          <Link className="link-register" to="/auth/register">
            Registrarse
          </Link>
        </div>

        <button className="login__article-btn_login" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </article>
  )
}

export default LoginScreen
