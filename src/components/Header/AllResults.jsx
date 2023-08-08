import { useParams } from "react-router-dom";
import withItemData from "../Item/withItemData";
import { Link } from "react-router-dom";
import { Spinner } from "../Item/Spinner";

export const AllResults = withItemData(({ itemData, loading }) => {
    const { searchText } = useParams();

    const filteredItems = itemData.filter((item) =>
        item.title.toUpperCase().includes(searchText.toUpperCase())
    );

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1 className="page_title">Search Results</h1>
            <div className="main_items_container">
                {filteredItems.map((item) => (
                    <Link key={item.id} className="items_container" to={`/detail/${item.id}`}>
                        <div>
                            <img className="items_img" src={item.pictureURL} alt={item.title} />
                            <p className="items_txt">{item.title}</p>
                            <p className="items_txt">${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
});
