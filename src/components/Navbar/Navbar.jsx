import { CartWidget } from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    return (
        <header className="header">

            <div className="header_container">

                <form className="header_search">
                    <input className="header_search_text" type="text" placeholder="Buscar" />
                    <button className="header_search_button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>

                <img src="/logo-vurdertrend.png" alt="vurdertrend-logo" className="header_logo" />

                <CartWidget />
            </div>


            <nav className="navbar">
                <a href="#" className="navbar_link">inicio</a>
                <a href="#" className="navbar_link">productos</a>
                <a href="#" className="navbar_link">contacto</a>
            </nav>


        </header>
    )

}