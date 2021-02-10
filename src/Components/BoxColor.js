import React from 'react';


function BoxColor({b,g,r}) {
    let style = {
        display:`flex`,
        backgroundColor:`rgb(${r}, ${g}, ${b})`,

    }
    return (
        <div style={style}>

     <h1>Random</h1>
     <h1>Random</h1>
        </div>
    );
}

export default BoxColor;