import React, { useState } from "react";
import { Card, Button, Box, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 30,
    width: 270,
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    margin: 12
  },
  button: {
    marginLeft: "auto",
    marginTop: 10
  }
});

function Register() {
  const classes = useStyles();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const handleSubmit = () => {
    console.log("submitted");

    if (password !== checkPassword) return;
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, name })
    })
      .then(res => res.text())
      .then(text => {
        console.log(text);
        setPassword("");
        setEmail("");
        setName("");
      });
  };

  return (
    <Card className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="Repeat Password"
        type="password"
        value={checkPassword}
        onChange={e => setCheckPassword(e.target.value)}
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
  );
}

export default Register;
