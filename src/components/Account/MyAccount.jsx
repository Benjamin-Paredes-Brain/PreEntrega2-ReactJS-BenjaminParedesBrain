import { useContext } from 'react'
import { Authcontext } from '../../context/Authcontext'
import { Navigate } from "react-router-dom"

export const MyAccount = () => {
    const { user } = useContext(Authcontext)

    if (!user.logged) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h2 className="page_title">MY ACCOUNT</h2>
        </div>
    )

}