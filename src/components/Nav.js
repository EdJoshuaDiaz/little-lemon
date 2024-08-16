import React from "react";
import Logo from "../images/Logo.jpg";

function Nav() { 
    return (
        <nav>
            <div>
                <a href="/"><img src={Logo} alt="Little Lemon" width={300}/></a>
            </div>
            <div>
                <ul>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                    <li><a href="/" role="button">Home</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;