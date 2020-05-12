import React from 'react';
import Post from './components/post'
import Register from './components/register';
import Login from './components/login';
import Upload from './components/upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <Upload/>
      <Register/>
      <Login/>
      <h1>Instagram</h1>
      <Post username="levischouten"/>
      <Post username="randomuser"/>
      <Post username="ivoschouten"/>
    </div>
  );
}

export default App;
