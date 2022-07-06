import React from "react";
import MainContainer from "./components/MainContainer";
import './App.css';
// import { Button } from 'semantic-ui-react'
import CountdownTimer from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => <MainContainer />;


function Timer() {
    return (
      <div>
       <CountdownTimer
       countdownTimestampMs={1659983662000}/>
        {/* <Footer/> */}
      </div>
    );
  }
export default App;