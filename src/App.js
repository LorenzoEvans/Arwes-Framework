import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Project, Link, Words, Router } from 'arwes'
import Panel from "./Panel";
import { Route } from 'react-router-dom'
import TAO from "./Archives/TAO";
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path={"/"} component={Panel}/>
        <Route exact path={"/Ancient_Ones"} component={TAO} />
      </Router>
    </div>
  );
}

export default App;
