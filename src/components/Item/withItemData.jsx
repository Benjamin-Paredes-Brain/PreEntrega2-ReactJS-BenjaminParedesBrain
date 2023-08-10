import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config.js";

const withItemData = (Component) => {
  const WithItemData = (props) => {
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    
    useEffect(() => {
      const data = collection(db, "PRODUCTOS")
      getDocs(data)
      .then((r) => {
        const docs = r.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setItemData(docs)
      })
      .catch (e => console.log(e))
      .finally(() => setLoading(false))

    }, [])

    return <Component {...props} loading={loading} itemData={itemData} database={db}/>;
  };

  return WithItemData;
};

export default withItemData;

