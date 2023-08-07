import { useParams } from "react-router-dom";
import { ItemCount } from "../Item/ItemCount";
import { ItemSize } from "./ItemSize";
import { NotFound } from "../NotFound/NotFound";
import { Spinner } from "./Spinner";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import withItemData from "./withItemData";


export const ItemDetailContainer = withItemData(({ loading, itemData }) => {
    const { itemid } = useParams();
    const item = itemData.find((prod) => prod.id === itemid);

    const { addtoCart, totalQuantity, isInCart, handleMenuCartOpen} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddCart = () => {
        if (!selectedSize) {
            alert("Por favor, selecciona un talle antes de agregar el ítem al carrito.");
            return;
        }
        const newItem = {
            ...item,
            quantity,
            selectedSize,
        };
        addtoCart(newItem);
        setQuantity(1);
        handleMenuCartOpen()
    };

    if (loading) {
        return <Spinner />;
    }

    if (!item) {
        return <NotFound />;
    }

    const availableStock = item.stock - (isInCart(item.id) ? totalQuantity(item.id) : 0);

    return (
        <div>
            <div className="detail_container">
                <img className="detail_img" src={item.pictureURL} alt={item.title} />
                <div className="detail_info_container">
                    <p className="detail_title">{item.title}</p>
                    <p className="detail_price">${item.price}</p>
                    <hr />
                    <ItemSize selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                    <ItemCount stock={availableStock} add={handleAddCart} quantity={quantity} setQuantity={setQuantity} />
                </div>
            </div>
        </div>
    );
});