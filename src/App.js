import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Project } from 'arwes'

function App() {
  return (
    <div className="App">
      <Header animate>

      </Header>
      <Project animate header='T.A.O.'>
        What do you know about the universe you live in?
      </Project>
    </div>
  );
}

export default App;
