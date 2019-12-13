import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Calendar, Chart, Pie} from "./components";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Chart/>
                <Pie/>
                <Calendar/>
            </header>
        </div>
    );
}

export default App;
