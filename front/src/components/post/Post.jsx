import "./post.css";
import {MoreVert, ThumbUp, ThumbDown} from "@mui/icons-material";
import axios from '../../api/axios';
import {useContext, useEffect, useState} from "react" ;
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { REACT_APP_PUBLIC_FOLDER } from "../../variables";

export default function Post({post}) {

    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    const PF = REACT_APP_PUBLIC_FOLDER;

    const [like,setLike] = useState(0)
    const [dislike,setDislike] = useState(0)
    const [isLiked,setIsLiked] = useState(0)
    const [isDisliked,setIsDisliked] = useState(0)

    useEffect(() => {
      setLike(post.likes.length);
      }, [currentUser._id, post.likes]);

      useEffect(() => {
        setDislike(post.dislikes.length);
        }, [currentUser._id, post.dislikes]);

        useEffect(() => {
          setIsLiked(post.likes.includes(currentUser._id));
          }, [currentUser._id, post.likes]);
          useEffect(() => {
            setIsDisliked(post.dislikes.includes(currentUser._id));
            }, [currentUser._id, post.dislikes]);
    
      useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/api/users?userId=${post.userId}`);
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);
    
    const likeHandler = () => {
      try {
        axios.put("/api/posts/" + post._id + "/like", { userId: currentUser._id });
      } catch (err) {}
      if(isLiked){
        setIsLiked(false)
        setLike(like-1)
      }else{
        setIsLiked(true)
        setLike(like+1)
        if(isDisliked){
            setIsDisliked(false)
            setLike(like+1)
            setDislike(dislike-1)
        }
      }
    }

    const dislikeHandler = ()=>{
      try {
        axios.put("/api/posts/" + post._id + "/dislike", { userId: currentUser._id });
      } catch (err) {}
      if(isDisliked){
          setIsDisliked(false)
          setDislike(dislike-1)
        }else{
          setIsDisliked(true)
          setDislike(dislike+1)
          if(isLiked){
              setIsLiked(false)
              setDislike(dislike+1)
              setLike(like-1)
          }
        }
      }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/no-avatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">Il y a une heure</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className="likeIcon" onClick={likeHandler}/>
                    <span className="likeIconBadge">{like}</span>
                    <ThumbDown className="likeIcon" onClick={dislikeHandler}/>
                    <span className="likeIconBadge">{dislike}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} commentaires</span>
                </div>
            </div>
        </div>
    </div>
  )
}
