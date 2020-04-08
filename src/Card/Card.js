import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.form} className="form" alt="form" />
        <div className="rightPart">
          <div className="cardText">
            <h1>{props.heading1}</h1>
            <h3>{props.heading3}</h3>
          </div>
          <div className="cardButtons">
            <a href={props.live}>
              <button>Live Demo</button>
            </a>
            <a href={props.code}>
              <button>Show Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
