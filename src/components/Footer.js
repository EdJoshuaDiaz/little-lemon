import Logo from "../images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faYelp } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <div>
                <a href="/"><img src={Logo} alt="Little Lemon" width={300}/></a>
            </div>
            <div>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} className="fa-xl"/>
                </a>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faInstagram} className="fa-xl"/>
                </a>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faYoutube} className="fa-xl"/>
                </a>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faYelp} className="fa-xl"/>
                </a>
            </div>
            <div>
                <p>Quick Links</p>
                <menu>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                </menu>
            </div>
            <div>
                <p>Business Information</p>
                <p>888-888-8888</p>
                <p>email@sample.com</p>
                <p>Monda - Sunday: 2:00 pm - 11:00 pm</p>
            </div>
            <div>
                <small>Allrights reserved 2024</small>
            </div>
        </footer>
    )
}
export default Footer;