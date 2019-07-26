import React from 'react';
import logo from './logo.svg';
import './App.css';

import MiImagenRickFn from './componentes/miIMagenRickFn';
import MiImagenRickCl from './componentes/miimagenRickCl';
import MisPosts from './componentes/misPosts'

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <br></br>
        <MiImagenRickFn />
        <MiImagenRickCl />
        <MisPosts />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
