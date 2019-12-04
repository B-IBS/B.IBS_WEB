import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Chart/>
      </header>
    </div>
  );
}

export default App;
