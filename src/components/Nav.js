import React from "react";
import Logo from "../images/Logo.jpg";

function Nav() { 
    return (
        <nav>
            <div>
                <a href="/"><img src={Logo} alt="Little Lemon" width={300}/></a>
            </div>
            <div>
                <menu>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                </menu>
            </div>
        </nav>
    )
}

export default Nav;