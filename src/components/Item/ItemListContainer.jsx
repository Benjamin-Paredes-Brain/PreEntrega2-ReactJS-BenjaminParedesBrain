import { Link } from "react-router-dom";
import { Spinner } from "../Item/Spinner";
import { ItemFilters } from "./ItemFilters";
import withItemData from "./withItemData";

export const ItemListContainer = withItemData(({ loading, itemData }) => {
    return (
        <div>
            <h2 className="page_title">PRODUCTS</h2>

            <div className="main_itemlist_container">
                <div className="filters_container">
                    <ItemFilters />
                </div>

                <div className="main_items_container">
                    {loading ? (
                        <Spinner />
                    ) : (
                        itemData.map((item) => (
                            <div className="items_container" key={item.id}>
                                <Link to={`/detail/${item.id}`}>
                                    <img className="items_img" src={item.pictureURL} alt={item.title} />
                                </Link>
                                <p className="items_txt">{item.title}</p>
                                <p className="items_txt">${item.price}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    )
})

