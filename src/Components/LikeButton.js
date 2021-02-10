import React, { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

function LikeButton(props) {
  let [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  const style = {
    backgroundColor: colors[likes % colors.length],
    padding: '8px',
    margin: '10px',
    fontSize: '2em',
    color: 'white',
  };

  return (
    <div>
      <button onClick={increment} style={style}>
        {likes} Like
      </button>
    </div>
  );
}

export default LikeButton;
