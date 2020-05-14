import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Upload from "./components/upload";
import UserContext from "./UserContext";

import "./App.css";
// import { ThemeContext } from "styled-components";

const useStyles = makeStyles({
  appBar: {
    marginBottom: 10,
    backgroundColor: "white",
    boxShadow: "none",
    display: "flex",
    alignItems: "flex-end"
  },
  link: {
    textDecoration: "none",
    padding: 10,
    color: "#4b86b4",
    fontSize: "1.1em",
    "&:hover": {
      color: "#2a4d69",
      textDecoration: "none",
      cursor: "pointer"
    }
  }
});

function App() {
  const classes = useStyles();

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Link to="/" className={classes.link}>
                HOME
              </Link>
              <Link to="/signup" className={classes.link}>
                SIGN UP
              </Link>
              <Link to="/signin" className={classes.link}>
                SIGN IN
              </Link>
              <Link to="/upload" className={classes.link}>
                POST
              </Link>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <Home handleLogin={setUser} />
            </Route>
            <Route path="/upload" component={Upload} />
            <Route path="/signup" component={Register} />
            <Route path="/signin" component={Login} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
