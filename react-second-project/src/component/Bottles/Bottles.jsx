import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    console.log(bottles);
    return (
        <div className='Bottles-container'>
            <h3>bottles: {bottles.length}</h3>
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;