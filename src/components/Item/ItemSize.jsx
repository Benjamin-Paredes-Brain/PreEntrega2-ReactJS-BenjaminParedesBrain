import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchResolve } from "../../helpers/fetchResolve";

export const ItemSize = () => {
    const [item, setItem] = useState()
    const [selectedSize, setSelectedSize] = useState(null)
    const { itemid } = useParams()

    const handleSize = (size) => {
        setSelectedSize(size)
    }


    useEffect(() => {

        fetchResolve()
            .then(r => {
                setItem(r.find(prod => prod.id === Number(itemid)))
            })

    }, [])

    return (
        <div>
            {item &&
                <div>
                    {
                        item.stock > 0 &&
                        <p className="detail_title_size">TALLES:</p>
                    }

                    {item.stock > 0 && item.size.map((size) => (
                        <button key={size} className={`detail_size ${selectedSize === size ? "selected_size" : ""}`} onClick={() => handleSize(size)}>
                            {size}
                        </button>
                    ))}


                </div>}

        </div>)
}