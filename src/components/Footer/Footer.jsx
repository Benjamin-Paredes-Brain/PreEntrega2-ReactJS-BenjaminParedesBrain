import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter  } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {

    return (
        <div className="footer_container">
            <p className="copyright">Copyright &copy; 2023 VurderTrend</p>
            <div className="networks_container">
                <p className="networks_title">social networks</p>
                <div className="icons_container"> 
                <a href="https://www.instagram.com/vurdertrend/" target="_blank" className="socialNetwork_icon"> <FontAwesomeIcon icon={faInstagram} /> </a>
                <a className="socialNetwork_icon"> <FontAwesomeIcon icon={faTwitter} /> </a>
                <a className="socialNetwork_icon"> <FontAwesomeIcon icon={faWhatsapp} /> </a>     
                </div>
            </div>
        </div>


    )
}
