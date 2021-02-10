import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  let [coolGuy, setCoolGuy] = useState(true);

  //   function changePicture() {
  //     // if (coolGuy == props.img) {
  //     //   setCoolGuy(props.imgClicked);
  //     // } else {
  //     //   setCoolGuy(props.img);
  //     // }
  //   }

  return (
    <div>
      <img
        onClick={() => setCoolGuy(!coolGuy)}
        src={coolGuy ? props.img : props.imgClicked}
        alt="If I must"
      />
    </div>
  );
}

export default ClickablePicture;
