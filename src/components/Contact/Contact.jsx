import { useForm } from '@formspree/react';
import { useState, useRef } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const schemaValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, "The name is too short")
        .max(20, "Maximum 20 characters")
        .required("This field is required"),
    email: Yup.string()
        .required("This field is required")
        .email("The email is invalid"),
    message: Yup.string()
        .max(100, "Maximum 100 characters")
        .required("This field is required"),

})



export const Contact = () => {
    const [state, handleSubmit] = useForm('maygnopa');
    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const isSuccess = await handleSubmit(event);
        if (isSuccess) {
            setShowAlert(true);
            formRef.current.reset();
        }
    };

    const showAlertMessage = () => {
        Swal.fire({
            title: 'SUBMITTED FORM',
            icon: 'success',
            confirmButtonText: 'ACCEPT',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/contact';
            }
        });
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            <h2 className="page_title">CONTACT</h2>
            <div className="main_form_container">

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: ""
                    }}
                    onSubmit={handleFormSubmit}
                    validationSchema={schemaValidation}
                    validateOnBlur={false}
                >
                    {() => (
                        <Form className="form_container" onSubmit={handleFormSubmit}>
                            <p className="label_form">NAME:</p>
                            <Field className="field_form" placeholder="EXAMPLE: Jhon Jhones" type="text" name="name" />
                            <ErrorMessage className="errorMessage_form" name="name" component="p" />
                            <p className="label_form">EMAIL:</p>
                            <Field className="field_form" placeholder="EXAMPLE: name@email.com" type="email" name="email" />
                            <ErrorMessage className="errorMessage_form" name="email" component="p" />
                            <p className="label_form">MESSAGE:</p>
                            <Field className="field_form" type="text" name="message" component="textarea" />
                            <ErrorMessage className="errorMessage_form" name="message" component="p" />

                            <button className="button_form" type="submit" disabled={state.submitting}>SEND</button>
                        </Form>
                    )}
                </Formik>

                {showAlert && showAlertMessage()}
            </div>
        </div>
    )
}


