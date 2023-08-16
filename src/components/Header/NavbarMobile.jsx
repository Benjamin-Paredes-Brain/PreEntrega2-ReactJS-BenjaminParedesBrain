import { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { Authcontext } from "../../context/Authcontext";

export const NavbarMobile = () => {
    const { user, googlesignOut } = useContext(Authcontext)
    const [showNavMobile, setShowNvabMobile] = useState(false)
    const [showCategoriesMobile, setShowCategoriesMobile] = useState(false)
    const abbreviatedName = user.name ? user.name.substring(0, 5) : "";

    const handleMenuNavOpen = () => {
        setShowNvabMobile(true);
    }

    const handleMenuNavClose = () => {
        setShowNvabMobile(false);
    }

    const handleCategories = (e) => {
        setShowCategoriesMobile(!showCategoriesMobile)
        e.stopPropagation()
    }

    return (
        <div>
            <FontAwesomeIcon onClick={handleMenuNavOpen} icon={faBars} className="mobile_burgerIcon" />
            <div className={showNavMobile ? "backdrop_activeNav" : ""} onClick={handleMenuNavClose}></div>
            <div className={showNavMobile ? "modal_containerNav modal_activeNav" : "modal_containerNav"} onClick={(e) => e.stopPropagation()}>

                <div className="mobileNav_container" onClick={handleMenuNavClose}>
                    <nav className="navbarMobile">
                        <Link to={"/"} className="navbar_linkMobile">home</Link>
                        <Link
                            className={showCategoriesMobile ? "navbar_linkMobile categories_active" : "navbar_linkMobile"}
                            onClick={handleCategories}
                        >
                            products
                        </Link>
                        <div className={`categories_drop ${showCategoriesMobile ? "open" : ""}`}>
                        <div className="drop_container">
                                <Link className="categories_link allProducts" to="/items">
                                    ALL PRODUCTS
                                </Link>
                            </div>
                            <div className="drop_container">
                                <Link className="categories_link" to="/category/t-shirt">
                                    T-SHIRTS
                                </Link>
                            </div>
                            <div className="drop_container">
                                <Link className="categories_link" to="/category/short">
                                    SHORTS
                                </Link>
                            </div>
                            <div className="drop_container">
                                <Link className="categories_link" to="/category/hoodie">
                                    HOODIES
                                </Link>
                            </div>
                        </div>
                        <Link to={"/contact"} className="navbar_linkMobile">contact</Link>
                    </nav>
                    {user.logged ? (
                        <div className="accountMobile_container">
                            <Link to={"/"} onClick={googlesignOut} className="account_linkMobile account_loged">Logout</Link>
                            <span className="account_linkMobile account_loged">|</span>
                            <Link to={"/login"} className="account_linkMobile account_loged">¡HELLO, {abbreviatedName}!</Link>
                        </div>
                    ) : (
                        <div className="accountMobile_container">
                            <Link to={"/register"} className="account_linkMobile">CREATE ACCOUNT</Link>
                            <span className="account_linkMobile">|</span>
                            <Link to={"/login"} className="account_linkMobile">LOGIN</Link>
                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}