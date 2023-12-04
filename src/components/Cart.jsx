const Cart = ({carts, handelRemove }) => {
    return (
        <div>
            <h4>Cart:{carts.length}</h4>
            <div className=" w-24 flex gap-4 ">
                {
                    carts.map(cart=><div>
                        <img src={cart.img}></img>
                        <button className="btn btn-warning" onClick={()=>handelRemove(cart.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;