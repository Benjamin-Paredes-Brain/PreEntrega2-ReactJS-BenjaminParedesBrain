import { useEffect, useState } from "react"
import { fetchResolve } from "../../helpers/fetchResolve"
import { Spinner } from "../Item/Spinner"
import { Link } from "react-router-dom"
import { ItemFilters } from "./ItemFilters"



export const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([])

    useEffect(() => {

        fetchResolve()
            .then(item => { setItem(item) })
            .finally(() => {
                setLoading(false)
            })


    }, [])

    return (
        <div>

            <h2 className="page_title">PRODUCTS</h2>

            <div className="main_itemlist_container">
                <div className="filters_container"><ItemFilters /></div>

                <div className="main_items_container">{
                    loading
                        ? <Spinner />
                        :
                        item.map((item) => (
                            <div className="items_container" key={item.id} >
                                <Link to={`/detail/${item.id}`}><img className="items_img" src={item.pictureURL} alt={item.title} /> </Link>
                                <p className="items_txt">{item.title}</p>
                                <p className="items_txt">${item.price}</p>
                            </div>
                        ))

                }</div>


            </div>

        </div>)
}