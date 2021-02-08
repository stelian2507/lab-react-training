import React from 'react';

const IdCard = (props) => {
  return (
    <div>
   <div>
   <img src = {props.img} alt="idpic"/>
   </div>
      
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>Gender: {props.gender}</div>
      <div>Birth: {props.birth}</div>
   
    </div>
  );
};

export default IdCard;