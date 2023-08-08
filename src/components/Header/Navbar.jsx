import { Link } from "react-router-dom"
import { CartModal } from "../CartModal/CartModal"
import { SearchBar } from "./Searchbar"

export const Navbar = () => {

    return (
        <header className="header">

            <div className="header_container">

                <SearchBar />

                <div className="header_logo_container" > <Link to={"/"}><img src="/logo-vurdertrend.png" alt="vurdertrend-logo" className="header_logo" /></Link></div>

                <div className="right_header_container">
                    <div className="account_container">
                        <a href="#" className="account_link">Create account</a>
                        <span className="account_link">|</span>
                        <a href="#" className="account_link">login</a>
                    </div>

                    <CartModal />

                </div>

            </div>


            <nav className="navbar">
                <Link to={"/"} className="navbar_link">home</Link>
                <Link to={"/items"} className="navbar_link">products</Link>
                <Link to={"/contact"} className="navbar_link">contact</Link>
            </nav>


        </header>
    )

}