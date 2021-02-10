import React from 'react';
// import moment from 'moment';

function IdCard(props) {
  return (
    <div className="idCard-box">
      <img src={props.picture} alt=""></img>
      <div>
        <p>
          <b>First Name</b>: {props.firstName}
        </p>
        <p>
          <b>Last Name</b>: {props.lastName}
        </p>
        <p>
          <b>Gender</b>: {props.gender}
        </p>
        <p>
          <b>Height</b>: {props.height}
        </p>
        <p>{/* <b>Birthday</b>: {moment(props.birth).format('LLLL')} */}</p>
      </div>
    </div>
  );
}

export default IdCard;
