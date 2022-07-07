import React, { Component, useInsertionEffect, useState } from "react";
import Logo from "../../assets/get in my belly.gif";
import Nathans from "../../assets/Nathans.webp";
import Turkey from "../../assets/turkey.jpg"
import RibFest from "../../assets/ribfest.jpg"
import Countdown from "react-countdown";
import Colorado from "../../assets/slopper.jpg";
import Casepork from "../../assets/case pork.jpg"
import Tamale from "../../assets/tamale.webp"
import './Contests.css';
import { Card } from 'react-bootstrap';
// import { SlackSelector } from 'react-reactions';
// import contests from "../../utils/contests";
// import PropTypes from "prop-types";



export default function Contest(props) {
  const [contest, setContest] = useState("hot dog contest");



  return (
    <div className="Contests">
      {/* {setContest("potato fest")} */}
      <div className="Logo">
        <Card className="d-flex justify-content-center align-center p-2">
        <img src={Logo} alt="Logo Image" style={{ width: "500px" }} />
        </Card>
      </div>
      <p>Ready, set, Gorge</p>
      <p>Believe it or not eating is a sport, checkout out a few of the countries eating contest. You think you have what it takes to win any of these contest?</p>
      <div>
        <p>Nathans Famous fourth of July Hot Dog Eating Contest</p>
        <ul>
          <Countdown date={Date.parse("04 July 2023 00:1:00 GMT")} />
          
          <li>
          <a href="https://people.com/food/nathans-hot-dog-eating-contest-rules/">How to enter</a>
          <li>
            <a href="http://www.twitter.com/eatingcontest">And the Winner is</a>
          </li>
          </li>
          
        </ul>

        
        <img src={Nathans} alt="nathans" style={{ width: "150px" }} />
      </div>
      <div>
        <p>Turkey testicle eating contest</p>
        <ul>
          <li>
            <a href="https://www.everfest.com/e/turkey-testicle-festival-huntley-il">Enter if you've got the....</a>
          </li>
          <Countdown date={Date.parse("25 Nov 2022 00:4:00 GMT")} />
          
        </ul>

        <img src={Turkey} alt="turkey" style={{ width: "150px" }} />
      </div>
      <div>
        <p>RibFest</p>
        <ul>
          <li>
            <a href="https://majorleagueeating.com/contests/939#form">If interested enter here</a>
          </li>
          <Countdown date={Date.parse("30 July 2022 00:4:00 GMT")} />
          
        </ul>

        <img src={RibFest} alt="RibFest" style={{ width: "150px" }} />
      </div>
      <div>
        <p>World Slopper Eating contest</p>
        <ul>
          <li>
            <a href="https://coloradostatefair.com/world-slopper-eating-championship/">Colorado state fair, link to register</a>
          </li>
          <Countdown date={Date.parse("26 August  2022 01::00 GMT")} />
          
        </ul>

        <img src={Colorado} alt="colorado" style={{ width: "150px" }} />
      </div>
      <div>
        <p>Trenton Thunder Cases Pork Roll eating championship</p>
        <ul>
          <li>
            <a href="https://majorleagueeating.com/contests/933">Registration begins 09-04-2022</a>
          </li>
          <Countdown date={Date.parse("29 sep 2025 00:4:00 GMT")} />
          
        </ul>

        <img src={Casepork} alt="casepork" style={{ width: "150px" }} />
      </div>
      <div>
        <p>Padrino foods world Tamale eating championship</p>
        <ul>
          <li>
            <a href="http://www.padrinofoods.com/2021/09/the-padrino-foods-world-tamale-eating-championship/">Registration begins 07-18-2022</a>
          </li>
          <Countdown date={Date.parse("18 July 2022 00:3:00 GMT")} />
          
        </ul>

        <img src={Tamale} alt="tamale" style={{ width: "150px" }} />
      </div>
      <div className="contest-description">{contest}</div>
      <div
        className="link home-link"
        // onClick={this.state.contestListClick}
      ></div>
      <Countdown date={Date.parse("29 sep 2025 00:4:00 GMT")} />
      

      {/* <div>
        {contests.map((contest, i) => (
          <div key={`contest${i}`}>
            <h2 className="contest-heading">{contest.name}</h2>
            <Countdown date={Date.parse(contest.time)} />
            
          </div>
        ))}
      </div> */}
    </div>
  );
}
