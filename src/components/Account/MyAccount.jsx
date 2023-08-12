import { useContext } from 'react'
import { AuthContext } from '../../context/Authcontex'
import { Navigate } from "react-router-dom"

export const MyAccount = () => {
    const { user } = useContext(AuthContext)

    if (!user.logged) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h2 className="page_title">MY ACCOUNT</h2>
        </div>
    )

}