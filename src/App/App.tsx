import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
        Demat breizh<br/>
        <Button onButtonClicked={(arg:string)=>{alert('app button clicked' + arg);}}>
            bla bla  
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&amp;v=beta&amp;t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" alt="logo"/>
          </Button>
    </div>
  );
}

export default App;
