import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
// import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

const App = () => <PortfolioContainer />;

function App() {
    return (
      <div className="App">
       <CountdownTimer
       countdownTimestampMs={1659983662000}/>
      </div>
    );
  }
export default App;
