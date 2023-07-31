import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ({ openCart }) => {
    return (
        <div className="cart_modal_container">
            <div className="cart_icon_container">
                <div onClick={openCart} className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <span className="cart_counter">0</span>
            </div>
        </div>
    )
}
