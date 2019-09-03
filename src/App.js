import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Project, Link, Words } from 'arwes'

function App() {
  return (
    <div className="App">
      <Header animate>

      </Header>
      <Project animate header='T.A.O.'>
        <Words>
        What do you know about the universe you live in?
        </Words>
        <Link href={"/Ynxlxrvae"}>The Ynxlxrvae</Link>
        <Link href={"/Ancient_Ones"}>The Ancient Ones</Link>
        <Link href={"/Hyvaeans"}>The Hyvaeans</Link>
      </Project>
    </div>
  );
}

export default App;
