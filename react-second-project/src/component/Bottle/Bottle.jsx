import React from 'react';
import './Bottle.css';

const Bottle = ({bottle}) => {
    console.log(bottle);
    const { img } = bottle; //using destructure
    return (
        <div className='card'>
            <img src= {img} alt="" />
        </div>
    );
};

export default Bottle;