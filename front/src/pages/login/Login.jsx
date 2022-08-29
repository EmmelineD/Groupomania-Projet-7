import "./login.css"
import Logo from "../../images/logo.png";
import React from "react";

export default function Login() {
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
                <div className="loginBox">
                    <input placeholder="Mail Groupomania" type="email" className="loginInput" />
                    <input placeholder="Mot de Passe" type="password" className="loginInput" />
                    <button className="submitButton">Connexion</button>
                    <span className="notLoginOrRegister">Pas de compte? <p to="/signup" className="cursorPointer">créez-en un !</p></span> {/* p sera remplacé par un lien */}
                </div>
            </div>
        </div>
    </div>
  )
}
