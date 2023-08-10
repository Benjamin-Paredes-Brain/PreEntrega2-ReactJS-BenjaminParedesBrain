import { query, writeBatch, collection, getDocs, where, documentId, addDoc } from "firebase/firestore"
import withItemData from "../Item/withItemData"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Navigate, Link } from "react-router-dom";

const schemaValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, "The name is too short")
        .max(20, "Maximum 20 characters")
        .required("This field is required"),
    direction: Yup.string()
        .min(6, "The direction is too short")
        .max(20, "Maximum 20 characters")
        .required("This field is required"),
    email: Yup.string()
        .required("This field is required")
        .email("The email is invalid")
})

export const Checkout = withItemData(({ database }) => {
    const { cart, totalQuantity, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const handleOrderSubmit = async (values) => {

        const order = {
            customer: values,
            items: cart.map(item => ({ id: item.id, price: item.price, quantity: item.quantity, name: item.title })),
            total: totalQuantity(),
            fyh: new Date()
        }


        const batch = writeBatch(database)
        const ordersRef = collection(database, "ORDERS")
        const itemsRef = collection(database, "PRODUCTOS")
        const q = query(itemsRef, where(documentId(), "in", cart.map(item => item.id)))

        const items = await getDocs(q)
        const outOfStock = []


        items.docs.forEach((doc) => {
            const itemCart = cart.find(item => item.id === doc.id)
            const stockFirebase = doc.data().stock

            stockFirebase >= itemCart.quantity
                ?
                batch.update(doc.ref, {
                    stock: stockFirebase - itemCart.quantity
                })
                :
                outOfStock.push(itemCart)

        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, order)
            emptyCart()
            setOrderId(doc.id)
        }
        else { alert(`some items are out of stock ${outOfStock.title}`) }
    }

    if (orderId) {
        return (
            <div className="order_feedback_container">
                <h2 className="order_feedback_title">Your purchase was registered successfully!</h2>
                <hr />
                <p className="order_feedback_number">Your order number is: <strong>{orderId}</strong></p>

                <Link className="order_feedback_link" to="/">home</Link>
            </div>
        )
    }


    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div style={{ minHeight: "100vh" }}> 

            <h2 className="page_title">CHECKOUT</h2>

            <div className="main_form_container">

                <Formik
                    initialValues={{
                        name: "",
                        direction: "",
                        email: ""
                    }}
                    onSubmit={handleOrderSubmit}
                    validationSchema={schemaValidation}
                    validateOnBlur={false}
                >
                    {() => (
                        <Form className="form_container">
                            <p className="label_form">NAME:</p>
                            <Field className="field_form" placeholder="EXAMPLE: Jhon Jhones" type="text" name="name" />
                            <ErrorMessage className="errorMessage_form" name="name" component="p" />
                            <p className="label_form">DIRECTION:</p>
                            <Field className="field_form" placeholder="EXAMPLE: street number ph" type="text" name="direction" />
                            <ErrorMessage className="errorMessage_form" name="direction" component="p" />
                            <p className="label_form">EMAIL:</p>
                            <Field className="field_form" placeholder="EXAMPLE: name@email.com" type="email" name="email" />
                            <ErrorMessage className="errorMessage_form" name="email" component="p" />

                            <button className="button_form" type="submit">MAKE AN ORDER</button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )


})