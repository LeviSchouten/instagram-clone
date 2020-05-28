import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, TextField, makeStyles } from "@material-ui/core";

import url from "../url";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 30,
    width: 270,
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    margin: 12,
  },
  button: {
    marginLeft: "auto",
    marginTop: 10,
  },
});

function Login() {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("id", res.id);
        history.push("/");
      });
  };

  return (
    <Card className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={classes.textField}
      />
      <Button
        className={classes.button}
        color="primary"
        onClick={handleSubmit}
        size="large"
      >
        Submit
      </Button>
    </Card>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     E-mail:
    //     <input
    //       type="text"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </label>
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
  );
}

export default Login;
