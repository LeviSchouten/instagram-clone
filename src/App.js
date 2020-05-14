import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

import Home from "./components/home";
import Register from "./components/register";
import Login from "./components/login";
import Upload from "./components/upload";
import "./App.css";

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

  console.log(process.env.NODE_ENV);

  return (
    <div className="App">
      <Router>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* <Typography color="secondary"> */}
            <Link to="/" className={classes.link}>
              HOME
            </Link>
            <Link to="/signup" className={classes.link}>
              SIGN UP
            </Link>
            <Link to="/singin" className={classes.link}>
              SIGN IN
            </Link>
            <Link to="/upload" className={classes.link}>
              POST
            </Link>
            {/* </Typography> */}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/signup" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
