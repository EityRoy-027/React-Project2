import React, { use } from 'react';

const Bottles = ({bottlesPromise}) => {
    const bottles=use(bottlesPromise);
    console.log(bottles);
    return (
        <div>
            <h3>bottles: {bottles.length}</h3>
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;