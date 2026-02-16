import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

// const [ cart, setCart]= useState([]);
const handleAddtoCart = (bottle) =>{
    console.log("Button Clicked,bottle");
}

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    console.log(bottles);
    return (
        <div>
            
            <h3> Total Bottles: {bottles.length}</h3>
            <div className='bottles-container'>
            {
                bottles.map(bottle=> <Bottle key={bottle.id} 
                handleAddtoCart={ () => handleAddtoCart(bottle)}    
                bottle={bottle}></Bottle>)
            }
        </div>
        </div>
    );
};

export default Bottles;