import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startRegister } from '../actions/auth.action'
import useForm from '../hooks/useForm'

const initForm = { name: '', email: '', password: '' }
const LoginScreen = () => {
  const dispatch = useDispatch()
  const [{ name, email, password }, handleInputChange] = useForm(initForm)
  const handleClick = (e) => {
    dispatch(startRegister(name, email, password))
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
      <form className="login__form">
        <input
          autoComplete="off"
          className="login__form-input"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <input
          autoComplete="off"
          className="login__form-input"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Your Email"
        />

        <div className="pass">
          <input
            autoComplete="off"
            className="login__form-input"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Your Password"
          />
        </div>
      </form>
      <div className="container-btn">
        <br />
        <button className="login__article-btn_login" onClick={handleClick}>
          Register
        </button>
      </div>
    </article>
  )
}

export default LoginScreen
