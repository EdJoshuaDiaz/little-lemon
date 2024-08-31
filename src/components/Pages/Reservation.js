import React from "react";
import "../../App.css";
import { FaTimes } from "react-icons/fa";
import ReactDom from "react-dom"


function Reservation({open, children, onClose}) {
  if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div id="reservation" className="container-row">
                <div className="overlay">
                    <div className="modal">
                        <button className="nav-btn nav-close-btn">
                            <FaTimes className="fa-lg" onClick={onClose}/>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
            
        </>,
        document.getElementById("portal")
    )
}
export default Reservation;