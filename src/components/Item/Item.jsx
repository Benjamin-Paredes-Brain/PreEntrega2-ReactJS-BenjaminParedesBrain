import { useEffect, useState } from "react"
import { fetchResolve } from "../../helpers/fetchResolve";
import { ItemCount } from "../ItemCount/ItemCount";
import Spinner from "./Spinner";



export const Item = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    useEffect(() => {

        fetchResolve()
            .then(product => { setProduct(product) })
            .finally(() => {
                setLoading(false)
            })


    }, [])

    if (loading) {
        return <Spinner />
      }


    return (<div className="main_products_container">


        {product.map((products) => (
            <div className="products_container" key={products.id} >
                <img className="products_img" src={products.pictureURL} alt={products.title} />
                <p className="products_txt">{products.title}</p>
                <p className="products_txt">{products.price}</p>
                <ItemCount stock={products.stock}/>
                
                
                
            </div>
        ))}





    </div>)
}