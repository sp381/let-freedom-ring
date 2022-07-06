import React from "react";
import Boris from "../../assets/boris eats.PNG";
import { Card, Col } from 'react-bootstrap';

export default function Munchers() {
  return (
    <div>
      <Card className="h2 mb-2 pt-2 font-weight-bold text-secondary text-center">
      <h2>"Some Very Hungry People"</h2>
        <h4 className="h4 pt-1 text-center font-italic">Join the ranks to eat and compete around the world!</h4>
      </Card>
      
      <Col class="col-md">
        <div className="Boris">
          <h1>Boris</h1>
          <div className="Boris">
            <img src={Boris} alt="Boris eats" style={{ width: "300px" }} />
            <button type="button" className='m-2'>
              <a href= "" rel="noreferrer">bio</a>
            </button>
          </div>
        </div>

        <div className="Sarah">
          <h1>Boris</h1>
          <div className="Sarah">
            <img src={Boris} alt="Sarah eats" style={{ width: "300px" }} />
            <button type="button" className='m-2'>
              <a href= "" rel="noreferrer">bio</a>
            </button>
          </div>
        </div>

        <div className="Oscar">
          <h1>Boris</h1>
          <div className="Oscar">
            <img src={Boris} alt="Oscar eats" style={{ width: "300px" }} />
            <button type="button" className='m-2'>
              <a href= "" rel="noreferrer">bio</a>
            </button>
          </div>
        </div>

        <div className="Carter">
          <h1>Boris</h1>
          <div className="Carter">
            <img src={Boris} alt="Carter eats" style={{ width: "300px" }} />
            <button type="button" className='m-2'>
              <a href= "" rel="noreferrer">bio</a>
            </button>
          </div>
        </div>
      </Col>
    </div>
  );
}

      // <section className="munchers-section">
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Oscar</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //      <article className="muncher">
      //             <h3 className="muncher-centered">Boris</h3>
              
      //             <a href="" target="_blank" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Carter</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      //     <div className="munchers">
      //         <article className="muncher">
      //             <h3 className="muncher-centered">Sarah</h3>
                  
      //             <a href="" target="_blank" id="img1" rel="noreferrer"><img src={require("../../assets/")} alt=""></img></a>
      //         </article>
      //     </div>
      // </section>

