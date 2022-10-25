import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import { useEffect, useState } from "react";
import axios from '../../api/axios';
import { useParams } from "react-router";

import { REACT_APP_PUBLIC_FOLDER } from "../../variables";

export default function Profile() {
    const PF = REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
  
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/api/users?username=${username}`);
        setUser(res.data);
      };
      fetchUser();
    }, [username]);

  return (
    <>
            <Topbar/>
            <div className="profileContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img
                            className="profileCoverImg"
                            src={
                                user.coverPicture
                                    ? PF + user.coverPicture
                                    : PF + "person/no_cover.png"
                            }
                            alt=""
                        />
                        <img
                            className="profileUserImg"
                            src={
                                user.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/no-avatar.png"
                                }
                            alt=""
                        />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <p className="profileDescription">{user.desc}</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} profile/>
                    </div>
                </div>
            </div>
            
        </>
  )
}
