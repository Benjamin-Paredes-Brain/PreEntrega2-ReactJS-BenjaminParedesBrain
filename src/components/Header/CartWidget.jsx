import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return (

        <div className="main_cart_container">

            <div className="cart_account_container">
                <a href="#" className="account_link">Create account</a>
                <span className="account_link">|</span>
                <a href="#" className="account_link">login</a>
            </div>

            <div className="cart_icon_container">
                <div className="cart"><FontAwesomeIcon icon={faCartShopping} /></div>
                <span className="cart_counter">0</span>
            </div>
        
        </div>
    )
}