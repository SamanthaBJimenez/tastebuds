import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../ImgFiles/logo.png';
import "../css/NavBar.css";

const NavBar = () => {
    return(
        <nav className = 'navbar'>
            <NavLink className="logo_link" exact to={"/"}> <img className = "logo" src={logo} /> </NavLink>
        </nav>
    )
}

export default NavBar;