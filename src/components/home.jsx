import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import Post from "./post";
import url from "../url";

const Home = ({ handleLogin }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) handleLogin(JSON.parse(user.substring(2))); // write redirect on login page and use name and id from useContext in post section
    fetch(url + "/posts")
      .then(data => data.json())
      .then(data => setPosts(data.posts.reverse()));
  }, []);

  const generatePosts = () =>
    posts.map((post, i) => <Post user={post} key={i} />);

  return <div>{posts ? generatePosts() : "Loading..."}</div>;
};

export default Home;
