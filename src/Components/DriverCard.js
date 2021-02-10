import React from 'react';
import Rating from './Rating';

function drivercard(props) {
  return (
    <div className="driverCard">
      <div className="pic">
        <img src={props.img} alt="" />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default drivercard;
