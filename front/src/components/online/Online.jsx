import "./online.css";
import React from "react";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username}</span>
    </li>
  )
}
