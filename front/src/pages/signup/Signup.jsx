import "./signup.css";
import Logo from "../../images/logo.png";
import { useRef } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const cursorPointer = {
    cursor: "pointer"
  };

export default function Signup() {
    const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/api/auth/signup", user);
        navigate.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <img className="loginLeftLogo" src={Logo} alt="Groupomania" />
                <div className="loginLeftTitle">
                    <h1>Groupomania</h1>
                    <h2>Bienvenue sur notre réseau social d'entreprise !</h2>
                </div>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input
                    placeholder="Prénom Nom"
                    required
                    ref={username}
                    className="loginInput"
                    />
                    <input
                    placeholder="Mail"
                    required
                    ref={email}
                    className="loginInput"
                    type="email"
                    />
                    <input
                    placeholder="Mot de passe"
                    required
                    ref={password}
                    className="loginInput"
                    type="password"
                    minLength="6"
                    />
                    <input
                    placeholder="Vérification du mot de passe"
                    required
                    ref={passwordAgain}
                    className="loginInput"
                    type="password"
                    />
                    <button className="submitButton" type="submit">
                    Sign Up
                    </button>
                    <span>
                        Déjà un compte? <Link to="/login" style={cursorPointer}>connectez-vous !</Link>
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}
