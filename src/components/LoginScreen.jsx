import { Link } from "react-router-dom";
const LoginScreen = () => {
  return (
    <article className='login__article'>
      <Link to='/auth' className='login__btn-back'>
        <i className='fas fa-arrow-circle-left'></i>
      </Link>
      <div className='login__article-paragraph'>
        <h1>Let`s sign you in.</h1>
        <h5>Welcome back. You`ve been missed!</h5>
      </div>
      <form className='login__form'>
        <input
          className='login__form-input'
          type='email'
          placeholder='Your Email'
        />
        <div className='pass'>
          <input
            className='login__form-input'
            type='password'
            placeholder='Your Password'
          />
          <button className='login__article-btn-eye'>
            <i className='far fa-eye'></i>
          </button>
        </div>
      </form>
      <div className='container-btn'>
        <button className='login__article-btn_login'>Sign In</button>
      </div>
    </article>
  );
};

export default LoginScreen;
