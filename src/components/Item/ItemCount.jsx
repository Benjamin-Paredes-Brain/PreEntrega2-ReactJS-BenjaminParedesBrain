import { useState } from "react"

export const ItemCount = ({ stock, initial}) => {
    const [count, setCount] = useState(stock > 0 ? initial = 1 : initial = 0)

    const handleIncrement = () => {
        count < stock && setCount(count + 1);
    }

    const handleDecline = () => {
        setCount(count === initial ? count : count - 1)
    }

    const onAdd = () => {
        stock > 0 ? alert(`You have added ${count} items to cart!`) : alert("There is no stock of this product!")

    }

    return (
        <>
            {stock > 0 ?

                <div className="quantity_selector">
                    <button className="count_button" onClick={handleDecline}>-</button>
                    <div>{count}</div>
                    <button className="count_button" onClick={handleIncrement}>+</button>

                </div>

                :
                <div className="out_of_stock">OUT OF STOCK</div>

            }


            <button className="cartadd_button" onClick={onAdd}>ADD TO CART</button>




        </>
    )
}