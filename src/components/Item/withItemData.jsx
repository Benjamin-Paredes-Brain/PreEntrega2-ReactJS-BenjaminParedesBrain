import { useEffect, useState } from "react";
import { fetchResolve } from "../../helpers/fetchResolve";

const withItemData = (Component) => {
  const WithItemData = (props) => {
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
      fetchResolve()
        .then((data) => setItemData(data))
        .finally(() => setLoading(false));
    }, []);

    return <Component {...props} loading={loading} itemData={itemData} />;
  };

  return WithItemData;
};

export default withItemData;
