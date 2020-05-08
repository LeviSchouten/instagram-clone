import React from 'react';
import Post from './components/post'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Instagram</h1>
      <Post username="levischouten"/>
      <Post username="randomuser"/>
    </div>
  );
}

export default App;
