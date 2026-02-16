import React from 'react';
import './Bottle.css';

const Bottle = ({bottle}) => {
    console.log(bottle);
    const { img, name,seller,price,ratings,stock,shipping} = bottle; //using destructure
    return (
        <div className='card'>
    <img style={{width:"300px",height:"300px",borderRadius:"10px"}} src= {img} alt="" />
   
<div>
    <h3>Name: {name}</h3>
    <h3>Seller: {seller}</h3>
    <h3>Price: ${price}</h3>
    <h3>Ratings: {ratings}</h3>
    <h3> Availbility: {stock} Remaining</h3>
    <h3> Shipping: {shipping}</h3>
    </div>
    
        </div>
    );
};

export default Bottle;