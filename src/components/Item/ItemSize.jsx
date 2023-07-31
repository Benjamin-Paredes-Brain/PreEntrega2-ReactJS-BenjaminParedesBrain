import { useParams } from "react-router-dom";
import { useState } from "react";
import withItemData from "./withItemData";

export const ItemSize = withItemData(({ itemData }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { itemid } = useParams();

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  const item = itemData.find((prod) => prod.id === itemid);
  return (
    <div>
      {item && (
        <div>
          {item.stock > 0 && (
            <p className="detail_title_size">TALLES:</p>
          )}

          {item.stock > 0 &&
            item.size.map((size) => (
              <button
                key={size}
                className={`detail_size ${
                  selectedSize === size ? "selected_size" : ""
                }`}
                onClick={() => handleSize(size)}
              >
                {size}
              </button>
            ))}
        </div>
      )}
    </div>
  );
});
