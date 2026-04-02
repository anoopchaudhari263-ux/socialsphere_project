import React, { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Social Feed</h2>
      {posts.map(post => (
        <div key={post._id} style={{border:"1px solid #ccc", margin:10, padding:10}}>
          <h4>{post.username}</h4>
          <p>{post.text}</p>
          {post.image && <img src={post.image} width="200" alt="" />}
          <p>❤️ {post.likes.length}</p>
          <p>💬 {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
