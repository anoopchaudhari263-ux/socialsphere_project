import React, { useEffect, useState } from "react";
import API from "../api";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div style={{maxWidth:"600px", margin:"auto"}}>
      <h2>Social Feed</h2>
      {posts.map(post => (
        <div key={post._id} style={{border:"1px solid #ddd", padding:"15px", marginBottom:"10px", borderRadius:"10px"}}>
          <h4>{post.username}</h4>
          <p>{post.text}</p>
          {post.image && <img src={post.image} alt="" style={{width:"100%"}} />}
          <p>❤️ {post.likes.length} | 💬 {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
