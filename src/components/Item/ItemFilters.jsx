import { useParams, Link } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { Spinner } from "./Spinner";
import withItemData from "./withItemData";

export const ItemFilters = withItemData(({ loading, itemData }) => { 
  const { itemCategory } = useParams();

  const filteredItems = itemCategory
    ? itemData.filter((item) => item.category === itemCategory) 
    : [];

  if (itemCategory && filteredItems.length === 0) {
    return loading ? <Spinner /> : <NotFound />;
  }

  return (
    <div>
      <h3 className="categories_title">CATEGORIES</h3>

      <div className="main_container">
        <div className="categories">
          <div className="categories_div">
            <Link className="categories_link" to="/category/t-shirt">
              T-SHIRTS
            </Link>
          </div>
          <div className="categories_div">
            <Link className="categories_link" to="/category/short">
              SHORTS
            </Link>
          </div>
          <div className="categories_div">
            <Link className="categories_link" to="/category/hoodie">
              HOODIES
            </Link>
          </div>
        </div>

        <div className="items_filter_container">
          {loading ? (
            <Spinner />
          ) : (
            filteredItems.map((item) => (
              <div className="items_filtercard_container" key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <img
                    className="items_filter_img"
                    src={item.pictureURL}
                    alt={item.title}
                  />
                </Link>
                <p className="items_filter_txt">{item.title}</p>
                <p className="items_filter_txt">${item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});
