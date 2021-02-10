import React from 'react';



function Rating(props) {

    function stars(star){

        Math.round(star)
        stars=""
        for(let i=0; i < 5; i++){
            if(i < star){
            stars += '★'
            }else{
                stars += '☆'
            }
        }
        return stars
    }


    return (
        <div>
               {stars(props.children)}
            
        </div>
    );
}



export default Rating;