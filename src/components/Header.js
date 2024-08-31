import React from "react";
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() { 

    const navRef = useRef();
        
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
      }

    return (
        <>
            <header className="container-row">
                <div className="container-column">
                    <nav>
                        <Link to="/"><img src={Logo} alt="Little Lemon" width={300}/></Link>
                        <menu ref={navRef}>
                            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                                <FaTimes className="fa-lg"/>
                            </button>
                            <li onClick={hideNavbar}><NavLink to="/">Home</NavLink></li>
                            <li onClick={hideNavbar}><NavLink to="about">About Us</NavLink></li>
                            <li onClick={hideNavbar}><NavLink to="menu">Menu</NavLink></li>
                            <li onClick={hideNavbar}><NavLink to="order">Order Online</NavLink></li>
                            <li onClick={hideNavbar}><NavLink to="login">Log In</NavLink></li>
                        </menu>
                        <button className="nav-btn" onClick={showNavBar}>
                            <FaBars className="fa-xl"/>
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;