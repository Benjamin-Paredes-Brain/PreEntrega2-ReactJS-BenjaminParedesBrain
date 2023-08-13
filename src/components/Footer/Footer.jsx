import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPersonHalfDress } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {

    return (
        <div className="footer_container">

            <div className="footer_info_container">
                <div className="footer_info border_right"><FontAwesomeIcon className="footerInfo_icon" icon={faGlobe} /> <p className="footerInfo_txt">WORLDWIDE SHIPPING</p></div>
                <div className="footer_info border_right"><FontAwesomeIcon className="footerInfo_icon" icon={faPersonHalfDress} /><p className="footerInfo_txt">NO GENDER</p></div>
                <div className="footer_info"><FontAwesomeIcon className="footerInfo_icon" icon={faDroplet} /><p className="footerInfo_txt">EXLUSIVE DROPS</p></div>
            </div>

            <div className="networks_container">
                <p className="networks_title">social networks</p>
                <div className="icons_container">
                    <a href="https://www.instagram.com/vurdertrend/" target="_blank" className="socialNetwork_icon"> <FontAwesomeIcon icon={faInstagram} /> </a>
                    <a className="socialNetwork_icon"> <FontAwesomeIcon icon={faTwitter} /> </a>
                    <a className="socialNetwork_icon"> <FontAwesomeIcon icon={faWhatsapp} /> </a>
                </div>
            </div>

            <p className="copyright">Copyright &copy; 2023 VurderTrend</p>
        </div>


    )
}
