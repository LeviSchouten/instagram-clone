import React, { useEffect, useState } from "react";

import Post from "./post";
import url from "../url";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(url + "posts")
      .then(data => data.json())
      .then(data => setPosts(data.posts));
  }, []);

  const generatePosts = () =>
    posts.map((post, i) => <Post user={post} key={i} />);

  return <div>{posts ? generatePosts() : "Loading..."}</div>;
};

export default Home;
