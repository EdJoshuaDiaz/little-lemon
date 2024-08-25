import React from "react";
import stark from "../../images/stark.jpg";
import thor from "../../images/thor.jpg";
import steve from "../../images/steve.jpg";
import greekSalad from "../../images/greekSalad.jpg";
import bruchetta from "../../images/bruchetta.jpg";
import dessert from "../../images/dessert.jpg";
import chefs from "../../images/chefs.jpg"
import "../../App.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
    return (
        <>
            <main className="container-row hero">
                <div className="container-column">
                    <h1>Litle Lemon</h1>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a className="btn btn-secondary" href="/reservation">Reserve A Table</a>
                </div>
            </main>
            <section id="cr1" className="container-row">
                <div className="container-column">
                    <h2>Specials</h2>
                    <a className="btn btn-primary" href="">Online Order</a>
                </div>
            </section>
            <section id="cr2" className="container-row">
                <div className="container-column">
                    <figure>
                        <img src={greekSalad} alt="Greek Salad" />
                        <figcaption>
                            <div className="menu-price">
                                <h4>Greek Salad</h4>
                                <p className="price">$12.00</p>
                            </div>
                            <div className="menu-details">
                                <p>Food as beautiful as the view from Santorini. Today’s good mood is brought to you by Greek food.</p>
                                <a href=""><FaLongArrowAltRight /> Order Now</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={bruchetta} alt="Bruchetta" />
                        <figcaption>
                            <div className="menu-price">
                                <h4>Bruchetta</h4>
                                <p className="price">$6.99</p>
                            </div>
                            <div className="menu-details">
                                <p>Food as beautiful as the view from Santorini. Today’s good mood is brought to you by Greek food.</p>
                                <a href=""><FaLongArrowAltRight /> Order Now</a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={dessert} alt="Dessert" />
                        <figcaption>
                            <div className="menu-price">
                                <h4>Lemon Dessert</h4>
                                <p className="price">$5.00</p>
                            </div>
                            <div className="menu-details">
                                <p>Food as beautiful as the view from Santorini. Today’s good mood is brought to you by Greek food.</p>
                                <a href=""><FaLongArrowAltRight /> Order Now</a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
            <section id="cr3" className="container-row">
                <div className="container-column">
                    <div className="reviews">
                        <div className="reviewer">
                            <figure>
                                <img src={stark} alt="Tony Stark"/>
                            </figure>
                            <figcaption>
                                <h5>Tony Stark</h5>
                                <p className="star">★★★★★</p>
                            </figcaption>
                        </div>
                        <p>This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.</p>
                    </div>
                    <div className="reviews">
                        <div className="reviewer">
                            <figure>
                                <img src={thor} alt="Thor Ragnarok"/>
                            </figure>
                            <figcaption>
                                <h5>Thor Ragnarok</h5>
                                <p className="star">★★★★★</p>
                            </figcaption>
                        </div>
                        <p>Do yourself a favor and visit this lovely restaurant in (CN). The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing.</p>
                    </div>
                    <div className="reviews">
                        <div className="reviewer">
                            <figure>
                                <img src={steve} alt="Steve Rogers"/>
                            </figure>
                            <figcaption>
                                <h5>Steve Rogers</h5>
                                <p className="star">★★★★★</p>
                            </figcaption>
                        </div>
                        <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                    </div>
                </div>
            </section>
            <section id="cr4" className="container-row">
                <div className="container-column">
                    <div>
                        <h2>Little Lemon</h2>
                        <p>Welcome to our restaurant’s “About Us” page! Here, we share the story of how our culinary adventure began and what makes us unique.</p><br/>
                        <p>Meet the passionate team behind the scenes, discover our commitment to quality ingredients, and feel the warmth of our inviting ambiance. Join us on this journey as we invite you to be a part of our delicious story.</p>
                    </div>
                    <figure>
                        <img src={chefs} alt="Chefs"/>
                    </figure>
                </div>
            </section>
        </>
    )
}
export default Home;