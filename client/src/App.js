import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import CountdownTimer from './components/pages/Home';

const App = () => <PortfolioContainer />;


 function Timer() {
    return (
      <div className="App">
       <CountdownTimer
       countdownTimestampMs={1659983662000}/>
      </div>
    );
  }
  
export default (App );