import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
        Demat breizh<br/>
        <Button onButtonClicked={(arg:string)=>{alert('app button clicked' + arg);}}>
            bla bla  <br/> node 2
          </Button>
    </div>
  );
}

export default App;
