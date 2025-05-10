import React from "react";
import "./card.css";

const Card = () => {
  return (
    <>
    <div className="body">
      <h1 className="Niche">DAILY TRAVELS</h1>

      <div className="Cards">
        <div className="card">
          <img src="./src/assets/beach.jpg" alt="" />
          <h1>Travel Beach</h1>
          <p>In summer the best place to visit is a beach</p>
          <p>#Travel</p>
        </div>
        <div className="card">
          <img src="./src/assets/flowers.jpg" alt="" />
          <h1>Humming Bird</h1>
          <p>Humming bird is the smallest bird in the world</p>
          <p>#Animals</p>
        </div>
        <div className="card">
          <img src="./src/assets/football.jpg" alt="" />
          <h1>Football</h1>
          <p>Playing football is the best way of exercise</p>
          <p>#Games</p>
        </div>
        <div className="card">
          <img src="./src/assets/forest.jpg" alt="" />
          <h1>Teek Tree</h1>
          <p>Furnitures made with teek tree are so strong</p>
          <p>#Plants</p>
        </div>
        <div className="card">
          <img src="./src/assets/ice.jpg" alt="" />
          <h1>Kashmir</h1>
          <p>Kashmir is a heaven on earth</p>
          <p>#Travel</p>
        </div>
        <div className="card">
          <img src="./src/assets/lake.jpg" alt="" />
          <h1>Som Sarovar</h1>
          <p>Lake present in the Himalayas</p>
          <p>#Traking</p>
        </div>
        <div className="card">
          <img src="./src/assets/river.jpg" alt="" />
          <h1>Dahl Lake</h1>
          <p>This lake is very famous for its clear water</p>
          <p>#Water</p>
        </div>
        <div className="card">
          <img src="./src/assets/snow.jpg" alt="" />
          <h1>Skew Riding</h1>
          <p>It is a very much fun for the tourists </p>
          <p>#Travel</p>
        </div>
        <div className="card">
          <img src="./src/assets/yoga.jpg" alt="" />
          <h1>Meditation</h1>
          <p>Meditation is best way to be fit and healthy</p>
          <p>#Exercise</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
