import { useForm} from '@formspree/react';
import { useState, useRef  } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


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
        <div>
            <h2 className="page_title">CONTACT</h2>
            <div className="main_contact_container">
                <form className="form_container" onSubmit={handleFormSubmit}>
                    <label htmlFor="name" className="label-forms">Name:</label>
                    <input type="text" id="name" name="name" className="inputs-forms" placeholder="Example: Benjamin Brain" required />
                    <label htmlFor="email" className="label-forms">Email:</label>
                    <input type="email" id="email" name="email" className="inputs-forms" placeholder="Example: name@email.com" required />
                    <label htmlFor="message" className="label-forms">Message:</label>
                    <textarea id="message" name="message" required className="inputs-forms"></textarea>
                    <button type="submit" className="button-forms" disabled={state.submitting}>Send</button>
                </form>
                {showAlert && showAlertMessage()}
            </div>
        </div>
    )
}
