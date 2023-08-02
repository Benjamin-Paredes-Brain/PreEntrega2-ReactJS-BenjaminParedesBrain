
export const ItemCount = ({ stock, add, quantity, setQuantity }) => {

    const handleIncrement = () => {
        quantity < stock && setQuantity(quantity + 1);
    }

    const handleDecline = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    return (
        <>
            {stock > 0 ?

                <div className="quantity_selector">
                    <button className="count_button" onClick={handleDecline}>-</button>
                    <div>{quantity}</div>
                    <button className="count_button" onClick={handleIncrement}>+</button>

                </div>

                :

                <div className="out_of_stock">OUT OF STOCK</div>

            }


            <button className={stock > 0 ? "cartadd_button" : "disable"} onClick={add} disabled={stock <= 0}>ADD TO CART</button>




        </>
    )
}