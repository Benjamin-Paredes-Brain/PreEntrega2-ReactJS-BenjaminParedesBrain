import { useState } from "react"

export const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(stock > 0 ? initial = 1 : initial = "SIN STOCK")

    const handleIncrement = () => {
        count < stock && setCount(count + 1);
    }

    const handleDecline = () => {
        setCount(count === initial ? count : count - 1)
    }

    const onAdd = () => {
        stock > 0 ? alert(`Haz agregado ${count} items al carrito!`) : alert("No hay stock de este producto!")

    }

    return (
        <>

            <div className="quantity_selector">

                <button className="count_button" onClick={handleIncrement}>+</button>
                <div>{count}</div>
                <button className="count_button" onClick={handleDecline}>-</button>

            </div>





            <button className="cartadd_button" onClick={onAdd}>AGREGAR AL CARRITO</button>




        </>
    )
}