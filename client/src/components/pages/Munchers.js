import React from "react";
import Boris from "../../assets/boris eats.PNG";
import { Container, Row , Col} from 'react-bootstrap';


export default function Munchers() {
  return (
    <div>
      <h1>Munchers Page</h1>
      <p>
        Here is a list of some very hungry people. Join the ranks to eat and
        compete around the world
      </p>
      {/* <Col> */}
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
      {/* </Col> */}
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

