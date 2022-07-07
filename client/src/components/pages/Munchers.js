import React from "react";
import Boris from "../../assets/boris eats.PNG";
import Oscar from "../../assets/oscar chills.jpg";
import Sarah from "../../assets/sarah eats.jpg";
import Carter from "../../assets/carter eats.jpg";

import CommentList from '../../components/CommentList';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../../utils/queries';
import { Card, Container, Col, Row } from 'react-bootstrap';

export default function Munchers() {
  
  const { loading, data } = useQuery(QUERY_COMMENTS);
  const comments = data?.comments || [];
  console.log(comments);

  return (
    <Container>
    <div>

      <br/>
      <Card className="d-flex justify-content-center p-2">
      <p>
        Some very hungry people! 
        <br/>
        Join the ranks to eat and
        compete around the world
      </p>
      </Card>

      <Row>
      <Col>
      <div className="Boris">
        <Row className="col">
        <h1>Boris</h1>
        <div className="Boris">
          <img src={Boris} alt="Boris eats" style={{ width: "300px" }} />
        </div>
        </Row>
      </div>
      <p1>Sometimes he is hungry, but when he is, nothing can stop him.<br></br>
        Favourite food: mayonnaise, pickles and herring.
      </p1>
      <button type="button" className='m-2'>
            <a href= "https://github.com/Boris-Veselov" rel="noreferrer">bio</a>
      </button>

      <div>
          {loading ? (
              <div>Loading...</div>
          ) : (
              <CommentList comments={comments} title="Some food for thought please" />
          )}
      </div>
      </Col>
      
      <Col>
      <div className="Oscar">
        <Row className="col">
        <h1>Oscar</h1>
        <div className="Oscar">
          <img src={Oscar} alt="Oscar chills" style={{ width: "450px" }} />
        </div>
        </Row>
      </div>
      <p1>Full time dad and part time nachos muncher.<br></br>
        Favourite food: 7 layer burrito from Taco Bell, Huevos Rancheros and tequilla.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
      </button>

      <div>
          {loading ? (
              <div>Loading...</div>
          ) : (
              <CommentList comments={comments} title="Some food for thought please" />
          )}
      </div>
      </Col>
      </Row>

      <Row>
      <Col>
      <div className="Sarah">
        <h1>Sarah</h1>
        <div className="Sarah">
          <img src={Sarah} alt="Sarah eats" style={{ width: "300px" }} />
        </div>
      </div>
      <p1>Devoted mother and a late night snacker.<br></br>
        Favourite food: 3 course dinners, car snacks and coffee.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
      </button>

      <div>
          {loading ? (
              <div>Loading...</div>
          ) : (
              <CommentList comments={comments} title="Some food for thought please" />
          )}
      </div>
      </Col>
      
      <Col>
      <div className="Carter">
        <h1>Carter</h1>
        <div className="Carter">
          <img src={Carter} alt="Carter eats" style={{ width: "300px" }} />
        </div>
      </div>
      <p1>He travels up and down the US to try all the new tofu there is.<br></br>
        Favourite food: make your own combo of what's in the fridge,
        Canadian bacon and ice cold water.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
      </button>

      <div>
          {loading ? (
              <div>Loading...</div>
          ) : (
              <CommentList comments={comments} title="Some food for thought please" />
          )}
      </div>
      </Col>
      </Row>
    </div>
    </Container>
  );
}


