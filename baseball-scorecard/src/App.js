import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

export const ballFN = (ball, setBall, setStrike) => {
  if(ball < 4){
    setBall(ball + 1)
  }else{
    setBall(0)
    setStrike(0)
  }
}

export const strikeFN = (strike, setStrike, setBall) => {
  if(strike < 3){
    setStrike(strike + 1)
  }else{
    setStrike(0)
    setBall(0)
  }
}

function App() {

  const [ ball, setBall ] = useState(0);
  const [ strike, setStrike ] = useState(0);

  useEffect(() => {
  }, [strike, ball])

  return (
    <div className="App">
      <header className="App-header">
        <h1>LETS PLAY BALL</h1>
        <Display balls={ball} strikes={strike}/>
        <Dashboard ballFN={ballFN} strikeFN={strikeFN}/>
      </header>
    </div>
  );
}

export default App;
