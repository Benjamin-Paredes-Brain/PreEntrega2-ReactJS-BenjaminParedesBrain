import { useContext, useState } from "react";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

export const CartModal = () => {
    const { cart, removetoCart } = useContext(CartContext)
    const [showCart, setShowCart] = useState(false);

    const handleMenuCartOpen = () => {
        setShowCart(true);
        document.body.style.overflow = "hidden";
    }

    const handleMenuCartClose = () => {
        setShowCart(false);
    }

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div>

            <div className={showCart ? "backdrop_active" : ""} onClick={handleMenuCartClose}></div>

            <div className={showCart ? "modal_container modal_active" : "modal_container"} onClick={(e) => e.stopPropagation()}>
                <span className="modal_close"></span>
                <h3 className="modal_title">SHOPPING CART</h3>
                {
                    cart.length === 0
                        ?
                        <div className="empty_cart">
                            <div className="empty_cart_icon"><FontAwesomeIcon icon={faCartArrowDown} /></div>
                            <h4 className="empty_cart_txt">your cart is empty :(</h4>
                            <Link className="empty_cart_button" onClick={handleMenuCartClose} to={"/items"}>GO SHOPPING</Link>
                        </div>
                        :
                        <div className="modal_display_container">  {

                            cart.map((item) => (
                                <div className="modal_items_container" key={item.id}>
                                    <img className="modal_img" src={item.pictureURL} alt={item.title} />
                                    <div className="modal_item">
                                        <div className="modal_item_info">
                                            <strong><p className="modal_itemTitle">{item.title}</p></strong>
                                            <p>Size: {item.selectedSize}</p>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price:  ${item.price * item.quantity}</p>
                                        </div>
                                        <button onClick={() => removetoCart(item.id)} className="modal_delete_button"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </div>
                                </div>
                            ))

                        }
                            <div className="modal_checkout">
                                <hr />
                                <p className="modal_subtotal">Subtotal: ${subtotal} </p>
                                <Link className="modal_checkout_button" onClick={handleMenuCartClose} to={"/checkout"}>Checkout</Link>
                            </div>

                        </div>
                }
            </div>

            <CartWidget openCart={handleMenuCartOpen} />
        </div>
    )
}