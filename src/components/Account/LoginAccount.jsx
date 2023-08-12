import { useContext } from 'react'
import { AuthContext } from '../../context/Authcontex'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { Navigate } from "react-router-dom"


export const LoginAccount = () => {
    const { googleLogin, user } = useContext(AuthContext)

    if (user.logged) {
        return <Navigate to="/my-account" />
    }

    return (
        <div>
            <h2 className="page_title">LOGIN</h2>

            <button className='googleButton' onClick={googleLogin}>
                <div className='googleButton_container'>
                    <FontAwesomeIcon icon={faGoogle} />
                    <div className='googleButton_txt'>Sign in with Google</div>
                </div>

            </button>
        </div>
    )
}
