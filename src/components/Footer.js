import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faYelp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <section id="fc1" className="container-row">
                <div className="container-column">
                    <nav id="footer-nav">
                        <menu>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="about">About Us</NavLink></li>
                            <li><NavLink to="menu">Menu</NavLink></li>
                            <li><NavLink to="order">Order Online</NavLink></li>
                            <li><NavLink to="login">Log In</NavLink></li>
                        </menu>
                    </nav>
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
            </section>
            <section id="fc2" className="container-row">
                <div className="container-column">
                    <div className="three-col">
                        <div>
                            <h5>Contact Us Today</h5>
                            <p><a href="tel:888-888-8888">888-888-8888</a></p>
                            <p><a href="mailto:email@sample.com">email@sample.com</a></p>
                        </div>
                        <div>
                            <h5>Our Location</h5>
                            <p>123 Street, 12 Road, 34 New Building <br/> San Marino, CA 1234, USA</p>
                        </div>
                        <div>
                            <h5>Business Hours</h5>
                            <time>
                                Monday - Friday: 2:00 pm - 9:00 pm <br/>
                                Saturday - Sunday: 2:00 pm - 11:00 pm
                            </time>
                        </div>
                    </div>
                </div>
            </section>
            <div className="copyright">
                <small>All rights reserved to Little Lemon 2024</small>
            </div>
        </footer>

    )
}
export default Footer;