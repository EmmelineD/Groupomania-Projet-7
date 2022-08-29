import "./share.css";
import React from "react";
import {PermMedia} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
          <input
            placeholder="Quoi de neuf ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo ou Vidéos</span>
                </div>
            </div>
            <button className="shareButton">Partager</button>
        </div>
      </div>
    </div>
  );
}