import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from "./components";
import {Pie} from "./components"

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Chart/>
                <Pie/>
            </header>
        </div>
    );
}

export default App;
