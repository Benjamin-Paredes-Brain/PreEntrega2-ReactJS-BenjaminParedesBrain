import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchResolve } from "../../helpers/fetchResolve";
import { ItemCount } from "../Item/ItemCount";
import { ItemSize } from "./ItemSize";
import { NotFound } from "../NotFound/NotFound";
import { Spinner } from "./Spinner";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const { itemid } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchResolve()
            .then(r => {
                setItem(r.find(prod => prod.id === Number(itemid)))
            })
            .finally(() => {
                setLoading(false)
            })


    }, [])

    if (!item) {
        return (loading ? <Spinner /> : <NotFound />)
    }

    return (
        <div>

            {item &&

                <div className="detail_container" >

                    <img className="detail_img" src={item.pictureURL} alt={item.title} />
                    <div className="detail_info_container">
                        <p className="detail_title">{item.title}</p>
                        <p className="detail_price">${item.price}</p>
                        <hr />
                        <ItemSize />
                        <ItemCount stock={item.stock}/>
                    </div>


                </div>}
        </div>



    )
}