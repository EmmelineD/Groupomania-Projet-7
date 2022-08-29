import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarCEONewImg" src="/assets/ceo.jpg" alt="" />
        <h4 className="rightbarTitle">Personnes en ligne</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">Information Profil</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Ville :</span>
          <span className="rightbarInfoValue">Paris</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Poste :</span>
          <span className="rightbarInfoValue">Développeuse FullStack</span>
        </div>
      </div>
      </>
    )
  }
  return (
      <div className="rightbar">
          <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
          </div>
      </div>
  );
}
