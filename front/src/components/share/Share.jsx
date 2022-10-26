import "./share.css";
import { useContext, useRef, useState } from "react";
import {PermMedia, Cancel} from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import axios from '../../api/axios';
import { REACT_APP_PUBLIC_FOLDER } from "../../variables";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/api/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
              className="shareProfileImg"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/no-avatar.png"
              }
              alt=""
            />
            <input
              placeholder={"Que voulez vous partager " + user.username + "?"}
              className="shareInput"
              ref={desc}
            />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo et Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
            <button className="shareButton" type="submit">
              Partager
            </button>
          </form>
      </div>
    </div>
  );
}