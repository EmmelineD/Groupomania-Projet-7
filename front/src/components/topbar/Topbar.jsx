import "./topbar.css";
import React from "react";
import { Search, Message, Notifications, Logout } from "@mui/icons-material";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Groupomania</span>
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
                        <Logout/>
                    </div>
                </div>
                <img src="/assets/person/1.jpg" alt="" className="topbarImg"/>
            </div>
        </div>
    )
}