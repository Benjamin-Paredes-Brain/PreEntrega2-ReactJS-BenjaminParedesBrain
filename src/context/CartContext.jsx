import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()
const initCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartContextProvider = ({ children }) => {
const [cart, setCart] = useState(initCart);
const [showCart, setShowCart] = useState(false);

const handleMenuCartOpen = () => {
    setShowCart(true);
    document.body.style.overflow = "hidden";
}

const handleMenuCartClose = () => {
    setShowCart(false);
}


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

    const emptyCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
      }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, addtoCart, removetoCart, totalQuantity, isInCart, emptyCart, showCart,handleMenuCartOpen, handleMenuCartClose}}>
            {children}
        </CartContext.Provider>
    )
}
