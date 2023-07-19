import { Link } from "react-router-dom"

export const NotFound = () => {

    return(
        <div className="error_container">

            <h1 className="error_txt">404 NOT FOUND</h1>

            <p className="error_txt">THE PAGE YOU ARE LOOKING FOR WAS NOT FOUND OR DOES NOT EXIST. WE'RE SORRY.</p>

            <button className="error_button"><Link className="error_link" to={"/"} >GO TO HOMEPAGE</Link></button>



        </div>
    )
}