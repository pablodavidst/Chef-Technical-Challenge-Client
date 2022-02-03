import React from 'react';
import './App.css';
import { AgeSelection } from './Components/AgeSelection';
import { Selector } from './Components/Selector';
import { TitleSelection } from './Components/TitleSelection';

function App() {
  return (
    <div className="App">
        <h1 className='main-title'>TV Shows search</h1>
        <Selector/>
    </div>
  );
}

export default App;
