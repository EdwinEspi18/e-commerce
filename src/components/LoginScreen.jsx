import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startLogin } from '../actions/auth.action'

const initForm = { email: '', password: '' }

const LoginScreen = () => {
  const dispatch = useDispatch()
  const [{ email, password }, handleInputChange] = useForm(initForm)

  const handleLogin = (e) => {
    if (email === '' || password === '') {
      return null
    }
    dispatch(startLogin(email, password))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <article className="login__article">
      <Link to="/auth" className="login__btn-back">
        <i className="fas fa-arrow-circle-left" />
      </Link>
      <div className="login__article-paragraph">
        <h1>Let`s sign you in.</h1>
        <h5>Welcome back. You`ve been missed!</h5>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__form-input"
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <div className="pass">
          <input
            className="login__form-input"
            type="password"
            placeholder="Your Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <button className="login__article-btn-eye">
            <i className="far fa-eye" />
          </button>
        </div>
      </form>
      <div className="container-btn">
        <div className="links">
          <h5>Don`t have an account?</h5>
          <Link className="link-register" to="/auth/register">
            Register
          </Link>
        </div>

        <button className="login__article-btn_login" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </article>
  )
}

export default LoginScreen
