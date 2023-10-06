import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemCategoryList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-orange-100 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 mx-auto">
                {cartItems?.length === 0 ? <h1>Cart is empty!! Add some items.</h1> : <ItemCategoryList items={cartItems}/>}        
            </div>
        </div>
    )
}

export default Cart;