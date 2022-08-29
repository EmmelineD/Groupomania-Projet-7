import "./signup.css"
import Logo from "../../images/logo.png";
import React from "react";

export default function Signup() {
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
                    <input placeholder="Prénom" type="firstName" className="loginInput" />
                    <input placeholder="Nom" type="LastName" className="loginInput" />
                    <input placeholder="Mail Groupomania" type="email" className="loginInput" />
                    <input placeholder="Mot de Passe" type="password" className="loginInput" />
                    <input placeholder="Confirmer le mot de passe" type="password" className="loginInput" />
                    <button className="submitButton">Connexion</button>
                    <span className="notLoginOrRegister">Vous avez déjà un compte? <p to="/login" className="cursorPointer">connectez-vous !</p></span> {/* p sera remplacé par un lien */}

                </div>
            </div>
        </div>
    </div>
  )
}
