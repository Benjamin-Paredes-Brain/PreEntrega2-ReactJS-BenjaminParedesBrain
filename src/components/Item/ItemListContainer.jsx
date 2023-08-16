import { Link } from "react-router-dom";
import { Spinner } from "../Item/Spinner";
import { ItemFilters } from "./ItemFilters";
import withItemData from "./withItemData";

export const ItemListContainer = withItemData(({ loading, itemData }) => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <h2 className="page_title">PRODUCTS</h2>

            <div className="main_itemlist_container">
                <div className="filters_container">
                    <ItemFilters />
                </div>

                <div className="main_items_container">
                    {loading
                        ?
                        <Spinner />
                        :
                        itemData.map((item) => (
                            <Link key={item.id} className="items_container" to={`/detail/${item.id}`}>
                                <div>
                                    <img className="items_img" src={item.pictureURL} alt={item.title} />
                                    <p className="items_txt">{item.title}</p>
                                    <p className="items_txt">${item.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    )
})

