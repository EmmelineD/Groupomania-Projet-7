import "./post.css";
import {MoreVert, ThumbUp, ThumbDown} from "@mui/icons-material";
import {Users} from "../../dummyData";
import {useState} from "react" ;

export default function Post({post}) {

    const [like,setLike] = useState(post.like)
    const [dislike,setDislike] = useState(post.dislike)
    const [isLiked,setIsLiked] = useState(false)
    const [isDisliked,setIsDisliked] = useState(false)
    
    const likeHandler = ()=>{
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
                    <img className="postProfileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post?.photo} alt="" />
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
