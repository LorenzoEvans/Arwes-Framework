import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Arwes, ThemeProvider, createTheme } from 'arwes'

ReactDOM.render(
<ThemeProvider theme={createTheme()}>
  <Arwes animate>
    <App />
  </Arwes>
</ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
