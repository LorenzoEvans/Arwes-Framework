import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Project, Link, Words, Router } from 'arwes'
import { Route } from 'react-router-dom'
import TAO from "./Archives/TAO";
function App() {
  return (
    <div className="App">
    <Route exact path={"/Ancient_Ones"} component={TAO} />
    </div>
  );
}

export default App;
