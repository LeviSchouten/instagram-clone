import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Post from "./components/post";
import Register from "./components/register";
import Login from "./components/login";
import Upload from "./components/upload";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
      {/* <Upload />
      <Register />
      <Login /> */}
      {/* <h1> Instagram </h1> <Post username="levischouten" /> */}
    </div>
  );
}

export default App;
