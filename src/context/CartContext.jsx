import { createContext, useState } from "react";

export const CartContext = createContext()
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addtoCart = (itemToAdd) => {
        const existingItemIndex = cart.findIndex((item) => item.id === itemToAdd.id);

        if (existingItemIndex !== -1) {

            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += itemToAdd.quantity;
            setCart(updatedCart);

        } else {
            setCart([...cart, itemToAdd]);
        }
    };

    const removetoCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const totalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addtoCart, removetoCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
