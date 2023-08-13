import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'
import { Navigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const MyAccount = () => {
    const { user } = useContext(Authcontext)

    if (!user.logged) {
        return <Navigate to="/" />
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <h2 className="page_title">MY ACCOUNT</h2>
            <div className='data_container'>
                <p className='data_title'>MY DATA</p>
                <div className='data_info'><FontAwesomeIcon className='data_icon' icon={faUserCircle} /><p className='data_txt'>{user.name}</p></div>
                <div className='data_info'><FontAwesomeIcon  className='data_icon'icon={faEnvelope} /><p className='data_txt'>{user.email}</p></div>
                
            </div>
        </div>
    )

}