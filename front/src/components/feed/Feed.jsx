import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from '../../api/axios';
import { AuthContext } from "../../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = new FormData();
      data.append("userId","632472286ad00ce9daa5d429");
      const res = username
        ? await axios.get("/api/posts/profile/" + username)
        //: await axios.get("/api/posts/timeline/" + user._id);
        //: await axios.post("/api/posts/timeline/all", {userId:"632472286ad00ce9daa5d429"});
        : await axios.get("/api/posts/timeline/all");
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
