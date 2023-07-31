import { createContext, useState } from "react";

export const CartContext = createContext()
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addtoCart = (item) => {
        setCart([...cart, item])
    }

    const removetoCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    return (
        <CartContext.Provider value={{ addtoCart, removetoCart }}>
            {children}
        </CartContext.Provider>
    )
}
