import React from 'react';

function CreditCard(props) {
    return (
        <div style = {{backgroundColor: props.bgColor, color: props.color, width: '340px', height: '174px', margin: '10px', padding: '10px', borderRadius: "10px"}}>
            <div>
                {props.type}
            </div>
            <div>  
                {props.number}
            </div>
            <div>  
                <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            </div>
            <div> 
                <p>{props.owner}</p> 
            </div>
        </div>
    );
}

export default CreditCard;