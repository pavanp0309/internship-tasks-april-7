import React from "react";

import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./Card.css";

const Card = ({ details }) => {
  console.log(details);
  return (
    <>
    <div className="card">
        <b className="card">{details.title}</b>
        <p className="card">{details.time}</p>
        <p className="card">{details.theater}</p>
        <p className="card">{details.rating}</p>
        <p className="card">{details.Language}</p>
        <p className="card">{details.lock}</p>
        <p className="card">{details.Free}</p>
        </div>
    </>
  );
};

export default Card;
