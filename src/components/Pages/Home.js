import React, { useEffect, useState } from "react";
import stark from "../../images/stark.jpg";
import thor from "../../images/thor.jpg";
import steve from "../../images/steve.jpg";
import greekSalad from "../../images/greekSalad.jpg";
import bruchetta from "../../images/bruchetta.jpg";
import dessert from "../../images/dessert.jpg";
import chefs from "../../images/chefs.jpg"
import "../../App.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import validator from "validator";
import Reservation from "./Reservation";
import Swal from "sweetalert2";

function Home() {

    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var minDate= year + '-' + month + '-' + day;

    const [isOpen, setIsOpen] = useState(false);

    const tableOption = [
        {value: "indoor", label: "Indoor"},
        {value: "outdoor", label: "Outdoor"},
    ]

    const [fname, setFname] = useState({value:"", isTouched: false});
    const [lname, setLname] = useState({value:"", isTouched: false});
    const [email, setEmail] = useState({value:"", isTouched: false});
    const [phone, setPhone] = useState({value:"", isTouched: false});
    const [table, setTable] = useState({value:"", isTouched: false});
    const [date, setDate] = useState({value:"", isTouched: false});
    const [time, setTime] = useState({value:"", isTouched: false});
    const [guests, setGuests] = useState({value:"", isTouched: false});
    const [message, setMessage] = useState({value:"", isTouched: false});
    const [value, setValue] = useState("");

    function ClearForm () {
        setFname({value:"", isTouched: false});
        setLname({value:"", isTouched: false});
        setEmail({value:"", isTouched: false});
        setPhone({value:"", isTouched: false});
        setTable({value:"", isTouched: false});
        setDate({value:"", isTouched: false});
        setTime({value:"", isTouched: false});
        setGuests({value:"", isTouched: false});
        setMessage({value:"", isTouched: false});
    }

    function SubmitHandler(e) {
        Swal.fire({
            title: "RESERVED!",
            text: "Your reservation has been successful!",
            icon: "success"
          });
        e.preventDefault();
        ClearForm();
    }

    function FormChecker() {
        if (fname.value && lname.value && validator.isEmail(email.value) && phone.value.length === 11 && date.value && time.value && guests.value) {
            return true;
        }
    }

    function orderNow () {
        Swal.fire({
            title: "ORDER PLACED!",
            icon: "success"
          });
    }

    return (
        <>
            <main className="container-row hero">
                <div className="container-column">
                    <h1>Litle Lemon</h1>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a className="btn btn-secondary" onClick={() => setIsOpen(true)}>Reserve A Table</a>
                </div>
            </main>
            <section id="cr1" className="container-row">
                <div className="container-column">
                    <h2>Specials</h2>
                    <a className="btn btn-primary" href="/order">Online Order</a>
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
                                <p className="order-now" onClick={orderNow}><FaLongArrowAltRight /> Order Now</p>
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
                                <p className="order-now" onClick={orderNow}><FaLongArrowAltRight /> Order Now</p>
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
                                <p className="order-now" onClick={orderNow}><FaLongArrowAltRight /> Order Now</p>
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

            
            <Reservation open={isOpen} onClose={() => setIsOpen (false)}>
                <form onSubmit={SubmitHandler}>
                    <h3>Reserve a Table Now!</h3>
                    <p className="form-desc">Answer the form to submit a reservation</p>

                    <div className="form-col-2">
                        <div id="fname-cont">
                            <label htmlFor="fname">First Name</label>
                            <input 
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="Juan"
                                value={fname.value}
                                onChange={e => {setFname({...fname, value: e.target.value})}}
                                onFocus={() => {setFname({...fname, isTouched: true})}}
                            />
                            {fname.isTouched && fname.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): null}
                        </div>

                        <div id="lname-cont">
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                placeholder="Dela Cruz"
                                value={lname.value}
                                onChange={e => {setLname({...lname, value: e.target.value})}}
                                onFocus={() => {setLname({...lname, isTouched: true})}}
                            />
                            {lname.isTouched && lname.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): null}
                        </div>
                    </div>

                     <div className="form-col-2">
                        <div id="email-cont">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email@email.com"
                                value={email.value}
                                onChange={e => {setEmail({...email, value: e.target.value})}}
                                onFocus={() => {setEmail({...email, isTouched: true})}}
                            />
                            {email.isTouched && email.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): email.isTouched && !validator.isEmail(email.value) ? (
                                <p className="error-msg">Invalid email format</p>
                            ): null}
                            
                        </div>

                        <div id="phone-cont-2">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                placeholder="09123456789"
                                value={phone.value}
                                onChange={e => {setPhone({...phone, value: e.target.value})}}
                                onFocus={() => {setPhone({...phone, isTouched: true})}}
                            />
                            {phone.isTouched && phone.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): phone.isTouched && !validator.isMobilePhone(phone.value, "en-PH") ? (
                                <p className="error-msg">Invalid phone format</p>
                            ): null}
                        </div>
                    </div>
                                    
                    <div id="radio-cont">
                        <label htmlFor="radio">Table</label>
                            {tableOption.map(list => (
                                <div key={list.value} className="radio">
                                    <input 
                                    name = "table" 
                                    type = "radio" 
                                    value = {list.value} 
                                    id = {list.value}
                                    checked = {value === list.value}
                                    onChange =  {e => setValue(e.target.value)}
                                    /> <label htmlFor={list.value}>{list.label}</label>
                                </div>
                            ))}
                    </div>

                    <div className="form-col-3">
                        <div id="date-cont">
                            <label htmlFor="date">Date</label>
                            <input
                            type="date"
                            id="date"
                            name="date"
                            data-provider="datepicker"
                            min={minDate}
                            value={date.value}
                                onChange={e => {setDate({...date, value: e.target.value})}}
                                onFocus={() => {setDate({...date, isTouched: true})}}
                            />
                            {date.isTouched && date.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): null}
                        </div>
                                        
                        <div id="time-cont">
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={time.value}
                                onChange={e => {setTime({...time, value: e.target.value})}}
                                onFocus={() => {setTime({...time, isTouched: true})}}
                            />
                            {time.isTouched && time.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): null}
                        </div>

                        <div id="guests-cont">
                            <label htmlFor="guests">Number of Guests</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                pattern="[0-9]"
                                min="0"
                                value={guests.value}
                                onChange={e => {setGuests({...guests, value: e.target.value})}}
                                onFocus={() => {setGuests({...guests, isTouched: true})}}
                            />
                            {guests.isTouched && guests.value === "" ? (
                                <p className="error-msg">Required</p>
                            ): guests.isTouched && guests.value < 3 ? (
                                <p className="error-msg">Must be atleast 3 pax to reserve.</p>
                            ): null}
                        </div>
                    </div>
                                    
                    <div id="message-cont">
                        <label htmlFor="message">Any Additional Instructions</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message.value}
                            onChange={e => {setMessage({...message, value: e.target.value})}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!FormChecker()}>Reserve A Table</button>
                    </form>
            </Reservation>
        </>
    )
}
export default Home;