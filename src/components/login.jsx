import React, { useState, useContext } from "react";
import UserContext from "../UserContext";

import url from "../url";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // console.log(useContext(UserContext));

  const handleSubmit = e => {
    e.preventDefault();
    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(res => {
        setPassword("");
        setEmail("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
