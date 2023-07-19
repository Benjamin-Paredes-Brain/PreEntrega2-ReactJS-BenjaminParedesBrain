import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    const preventdefault = (e) => {
        e.preventDefault();
    }

    return (
        <header className="header">

            <div className="header_container">

                <form className="header_search">
                    <input className="header_search_text" type="text" placeholder="search" />
                    <button className="header_search_button" onClick={preventdefault}> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                </form>

                <div className="header_logo_container" > <Link to={"/"}><img src="/logo-vurdertrend.png" alt="vurdertrend-logo" className="header_logo" /></Link></div>

                <CartWidget />
            </div>


            <nav className="navbar">
                <Link to={"/"} className="navbar_link">home</Link>
                <Link to={"/items"} className="navbar_link">products</Link>
                <Link to={"/contact"} className="navbar_link">contact</Link>
            </nav>


        </header>
    )

}