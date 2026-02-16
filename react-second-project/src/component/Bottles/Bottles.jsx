import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({bottlesPromise}) => {
const bottles=use(bottlesPromise);
console.log(bottles);

const [cart, setCart] = useState([]);

const handleAddtoCart = (bottle) =>{
    console.log("Button Clicked,bottle");
    console.log(bottle);
    const newCart = [...cart,bottle]
    setCart(newCart);
}
    return (
        <div>
            
            <h3> Total Bottles: {bottles.length}</h3>
            <p>Added to Cart: {cart.length}</p>
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