import { Link } from "react-router-dom";
import start from "../img/login-img.svg";

const Start = () => {
  return (
    <div className="start__main">
      <div className="start__main-container-img">
        <img className="start__main-img" src={start} alt="Login" />
      </div>
      <div className="start__main-paragraph">
        <h1>Enterprise team collaboration</h1>
        <p>
          Bring together your files, your tools, projects and people. including
          a new mobile and desktop application.
        </p>
      </div>
      <div className="start__main-buttons">
        <Link className="start__main-btn btn-register" to="/auth/register">
          Register
        </Link>
        <Link className="start__main-btn btn-login" to="/auth/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Start;
