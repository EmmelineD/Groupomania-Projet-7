import "./topbar.css";
import React from "react";
import { Search, Message, Notifications, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleClick =() => {
        localStorage.removeItem("user");
      };
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Groupomania</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="rechercher Groupomania" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Page d'accueil</span>
                </div>
                <div className="topbarIcons">
                <div className="topbarIconItem">
                        <Message/>
                        <span className="topbarIconBadge">4</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <button onClick={handleClick}><Logout/></button>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img
                        src={
                            user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"
                            }
                        alt=""
                         className="topbarImg"
                    />
                </Link>
            </div>
        </div>
    )
}