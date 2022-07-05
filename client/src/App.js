import React from "react";
import MainContainer from "./components/MainContainer";
import './App.css';
import CountdownTimer from "./components/pages/Home";
import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => <MainContainer />;


function Timer() {
    return (
      <div className="App">
       <CountdownTimer
       countdownTimestampMs={1659983662000}/>
        <Footer/>
      </div>
    );
  }
export default App;