import { Link } from "react-router-dom"
import { CartModal } from "../CartModal/CartModal"
import { SearchBar } from "./SearchBar"
import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'

export const Navbar = () => {
    const { user, googlesignOut } = useContext(Authcontext)

    const abbreviatedName = user.name ? user.name.substring(0, 5) : "";


    return (
        <header className="header">

            <div className="header_container">

                <SearchBar />

                <div className="header_logo_container" > <Link to={"/"}><img src="/logo-vurdertrend.png" alt="vurdertrend-logo" className="header_logo" /></Link></div>

                <div className="right_header_container">
                    <div className="account_container">

                        {user.logged ? (
                            <div>
                                <Link to={"/"} onClick={googlesignOut} className="account_link account_loged">Logout</Link>
                                <span className="account_link account_loged">|</span>
                                <Link to={"/login"} className="account_link account_loged">¡HELLO, {abbreviatedName}!</Link>
                            </div>
                        ) : (
                            <div>
                                <Link to={"/register"} className="account_link">CREATE ACCOUNT</Link>
                                <span className="account_link">|</span>
                                <Link to={"/login"} className="account_link">LOGIN</Link>
                            </div>
                        )}

                    </div>

                    <CartModal />

                </div>

            </div>


            <nav className="navbar">
                <Link to={"/"} className="navbar_link">home</Link>
                <Link to={"/items"} className="navbar_link">products</Link>
                <Link to={"/contact"} className="navbar_link">contact</Link>
            </nav>


        </header >
    )

}