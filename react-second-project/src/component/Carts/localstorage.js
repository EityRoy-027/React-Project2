const getCartFromLocalStorage = () =>{
    const storedItem= localStorage.getItem( 'cart' );

    if(storedCartstring){
        const storedcart= JSON.parse(storedCartstring)
        return storedcart;
    }
    return [];
}


const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart' , cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id);
    
    saveCartToLocalStorage(newcart);
}
export{getCartFromLocalStorage , addItemToCartLocalStorage}