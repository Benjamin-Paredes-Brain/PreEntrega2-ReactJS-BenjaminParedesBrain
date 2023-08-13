import { useContext, useState } from 'react'
import { Authcontext } from '../../context/Authcontext'
import { Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

export const CreateAccount = () => {
    const { googleLogin, user } = useContext(Authcontext)

    if (user.logged) {
        return <Navigate to="/" />
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <h2 className="page_title">CREATE ACCOUNT</h2>

            <button className='googleButton' onClick={googleLogin}>
                <div className='googleButton_container'>
                    <FontAwesomeIcon icon={faGoogle} />
                    <div className='googleButton_txt'>Sign in with Google</div>
                </div>

            </button>
        </div>
    )
}