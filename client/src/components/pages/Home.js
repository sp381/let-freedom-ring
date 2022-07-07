import {useState, useEffect} from 'react';
import './CountdownTimer.css';
// import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';
import Homepage from "../../assets/homepage.jpg";
import Button from 'react-bootstrap/Button';
import { Card, CardGroup, Container,  } from 'react-bootstrap';
import Timer from '../Timer';

const CountdownTimer = ({countdownTimestampMs}) => {

    return(
        <Container>

       
        <main>
            <br/>
            <CardGroup className="text-capitalize d-flex justify-content-center h3 mb-4 w-100 text-center">
        <div>
            <p>Love to eat? Well so do we! 
                <br/>
                Browser the upcoming eating contest or show off your skills and enter to eat!
                <br/>
                <br/>
                * We are not responsible for any weight gain, enter at your own risk.</p>
        </div>
        </CardGroup>
            
            <div>

                Featured contest of the month - American Taste Away “Super Elvis” Challenge. Countdown to chowdown:

                <br/>
                </div>

            <Button type="button">eat
            <a href= "https://www.americantasteaway.com/" rel="noreferrer">now</a>
            </Button>
      
        <Timer
        countdownTimestampMs={1659983662000}
        />
        <div className="Homepage">
          <img src={Homepage} alt="hot dog eatting" style={{ width: "400px" }} />
        </div>
        </main>
        </Container>
    );
}

export default CountdownTimer;

