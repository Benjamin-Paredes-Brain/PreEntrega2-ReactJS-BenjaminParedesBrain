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

    const {addtoCart} = useContext(CartContext)
    const [quantity, Setquantity] = useState(1)

    const handleAddCart = () => {
        const newItem = {
            ...item,
            quantity
        }
        addtoCart(newItem)
    }

    if (loading) {
        return <Spinner />;
    }

    if (!item) {
        return <NotFound />;
    }

    return (
        <div>
            <div className="detail_container">
                <img className="detail_img" src={item.pictureURL} alt={item.title} />
                <div className="detail_info_container">
                    <p className="detail_title">{item.title}</p>
                    <p className="detail_price">${item.price}</p>
                    <hr />
                    <ItemSize />
                    <ItemCount stock={item.stock} add={handleAddCart}/>
                </div>
            </div>
        </div>
    )
})
