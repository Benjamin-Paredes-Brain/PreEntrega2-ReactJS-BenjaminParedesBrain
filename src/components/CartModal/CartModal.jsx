import { useState } from "react";
import { CartWidget } from "./CartWidget";

export const CartModal = () => {
    const [showCart, setShowCart] = useState(false);

    const handleMenuCartOpen = () => {
        setShowCart(true);
    }

    const handleMenuCartClose = () => {
        setShowCart(false);
    }

    return (
        <div>

            <div className={showCart ? "backdrop_active" : ""} onClick={handleMenuCartClose}></div>

            <div className={showCart ? "modal_container modal_active" : "modal_container"} onClick={(e) => e.stopPropagation()}>
                <span className="modal_close"></span>
                <h3 className="modal_title">SHOPPING CART</h3>
                <button className="modal_delete_button">Delete Cart</button>
            </div>

            <CartWidget openCart={handleMenuCartOpen} />
        </div>
    )
}
