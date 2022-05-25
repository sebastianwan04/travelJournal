import React from "react"
import logo from "../img/logo.svg"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="navbar--logo" src={logo} alt="" />
            <h3 className="navbar--title"> my travel journal. </h3>
        </nav>
    )
}