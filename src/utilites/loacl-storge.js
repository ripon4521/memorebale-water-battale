const getStoreItem =()=>{
    const saveCartItem = localStorage.getItem('cart');
    if (saveCartItem) {
        return JSON.parse(saveCartItem)
    }
    return [];
};

const saveToLs =cart =>{
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart', stringify)
}


const removecartItem =id=>{
    const cart = getStoreItem()
    const remaining = cart.filter(idx => idx!== id)
    saveToLs(remaining)
}

const addToLs = id =>{
    const cart = getStoreItem();
    cart.push(id)
    saveToLs(cart)
}
export {addToLs, getStoreItem, removecartItem}