import React from "react";
import Boris from "../../assets/boris eats.PNG";
import Oscar from "../../assets/oscar chills.jpg";
import Sarah from "../../assets/sarah eats.jpg";


export default function Munchers() {
  return (
    <div>
      <h1>Munchers Page</h1>
      <p>
        Here is a list of some very hungry people. Join the ranks to eat and
        compete around the world
      </p>
      <div className="Boris">
        <h1>Boris</h1>
        <div className="Boris">
          <img src={Boris} alt="Boris eats" style={{ width: "300px" }} />
          <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
          </button>
        </div>
      </div>

      <div className="Oscar">
        <h1>Oscar</h1>
        <div className="Oscar">
          <img src={Oscar} alt="Oscar chills" style={{ width: "300px" }} />
          <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
          </button>
        </div>
      </div>

      <div className="Sarah">
        <h1>Sarah</h1>
        <div className="Sarah">
          <img src={Sarah} alt="Sarah eats" style={{ width: "300px" }} />
          <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
          </button>
        </div>
      </div>

      <div className="Carter">
        <h1>Carter</h1>
        <div className="Carter">
          <img src={Boris} alt="Carter eats" style={{ width: "300px" }} />
          <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
          </button>
        </div>
      </div>
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

