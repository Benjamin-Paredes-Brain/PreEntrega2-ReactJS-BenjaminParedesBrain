import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = ({ openCart }) => {
    const {totalQuantity, handleMenuCartOpen} = useContext(CartContext)
    
    return (
        <div className="cart_modal_container">
            <div className="cart_icon_container">
                <div onClick={openCart} className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <span className="cart_counter">{totalQuantity()}</span>
            </div>
        </div>
    )
}
