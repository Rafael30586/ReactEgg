import React, { useState } from 'react'

const Button = () => {

    const [clicks,setClicks] = useState(5);
    const [clicks2,escribir] = useState('e');

    const handleClick = () => {
        setClicks(clicks*2);
    }

    const handleClick2 = () => {
        
        if(clicks%100==20){
            escribir(clicks2+'a');
        }else if(clicks%100==40){
            escribir(clicks2+'t');
        }else if(clicks%100==60){
            escribir(clicks2+'o');
        }else if(clicks%100==80){
            escribir(clicks2+'v');
        }else{
            escribir(clicks2+'s');
        }
        //escribir(clicks2+"r");

    }

  return (
    <div>
        <button type="button" className="btn btn-outline-info" onClick={handleClick}>Info</button>
        <button type="button" className="btn btn-outline-dark" onClick={handleClick2}>Dark</button>
        <h2>Puntos: {clicks}</h2>
        <h3>{clicks2}</h3>
    </div>
  )
}

export default Button
