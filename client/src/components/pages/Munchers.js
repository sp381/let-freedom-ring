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
        </div>
      </div>
      <p1>Sometimes hungry, but when he is, nothing can stop him.<br></br>
        Favourite food: mayonnaise, pickles and herring.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
      </button>

      <div className="Oscar">
        <h1>Oscar</h1>
        <div className="Oscar">
          <img src={Oscar} alt="Oscar chills" style={{ width: "300px" }} />
        </div>
      </div>
      <p1>Full time dad and part time nachos muncher.<br></br>
        Favourite food: 7 layer burrito from Taco Bell, Huevos Rancheros and tequilla.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
      </button>

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

      <div className="Carter">
        <h1>Carter</h1>
        <div className="Carter">
          <img src={Boris} alt="Carter eats" style={{ width: "300px" }} />
        </div>
      </div>
      <p1>He travels up and down the USA to try all the new tofu this country has to offer.<br></br>
        Favourite food: make your own combo of what's in the fridge,
        Canadian bacon and ice cold water with ice.
      </p1>
      <button type="button" className='m-2'>
            <a href= "" rel="noreferrer">bio</a>
          </button>
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

