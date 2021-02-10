import React from 'react';

let style = {
    border: '1px solid',
    margin: '1%',
    padding: '1%',
    fontSize: 20
}

function Random(props) {
    return (
        <div style={style}>
            <p><b>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * props.max) + props.min}</b></p>
        </div>
    );
}

export default Random;