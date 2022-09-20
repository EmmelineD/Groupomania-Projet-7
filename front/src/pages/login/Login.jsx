import "./login.css"
import Logo from "../../images/logo.png";
import { useContext, useRef } from "react";
import {Link} from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const cursorPointer = {
    cursor: "pointer"
  };

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch,
      ()=>{window.location.reload()} //fix tempo
    );
      
  };

  return (
    <div className="login">
        <div className="login-Wrapper">
            <div className="login-Wrapper-Left">
                <img className="login-Wrapper-Left_Logo" src={Logo} alt="Groupomania" />
                <div className="login-Wrapper-Left_Title">
                    <h1>Groupomania</h1>
                    <h2>Bienvenue sur notre réseau social d'entreprise !</h2>
                </div>
            </div>
            <div className="login-Wrapper-Right">
            <form className="login-Wrapper-Right-Box" onSubmit={handleClick}>
            <input
              placeholder="Mail Groupomania"
              type="email"
              required
              className="login-Wrapper-Right-Box_input"
              ref={email}
            />
            <input
              placeholder="Mot de passe"
              type="password"
              required
              minLength="6"
              className="login-Wrapper-Right-Box_input"
              ref={password}
            />
            <button className="submitButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                "Veuillez patienter"
              ) : (
                "Connexion"
              )}
            </button>
            <span>
            Pas encore de compte? <Link to="/signup" style={cursorPointer}>créez-en un !</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}