import Logo from "../images/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faYelp } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container-row">
                <div className="container-column">
                    <div className="three-col">
                        <div>
                            <div>
                                <a href="/"><img src={Logo} alt="Little Lemon" width={300}/></a>
                            </div>
                            <div id="soc-med">
                                <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
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
                        </div>
                        <div>
                            <div>
                                <h5>Quick Links</h5>
                                <nav id="footer-nav">
                                    <menu>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="about">About Us</NavLink></li>
                                        <li><NavLink to="menu">Menu</NavLink></li>
                                        <li><NavLink to="reservation">Reservation</NavLink></li>
                                        <li><NavLink to="order">Order Online</NavLink></li>
                                        <li><NavLink to="login">Log In</NavLink></li>
                                    </menu>
                                </nav>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5>Business Information</h5>
                                <p><a href="tel:888-888-8888">888-888-8888</a></p>
                                <p><a href="mailto:email@sample.com">email@sample.com</a></p>
                                <p>123 Street, 12 Road, 34 New Building <br/> San Marino, CA 1234, USA</p>
                                <time>
                                    Monday - Friday: 2:00 pm - 9:00 pm <br/>
                                    Saturday - Sunday: 2:00 pm - 11:00 pm
                                </time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <small>All rights reserved to Little Lemon 2024</small>
            </div>
        </footer>

    )
}
export default Footer;