import React from 'react';
import './Bottle.css';

const Bottle = ({bottle}) => {
    console.log(bottle);
    const { img } = bottle; //using destructure
    return (
        <div className='card'>
    <img style={{width:"300px",height:"300px"}} src= {img} alt="" />
        </div>
    );
};

export default Bottle;