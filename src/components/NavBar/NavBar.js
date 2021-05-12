import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../cam.gif'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logo" src={Logo} width="85" height="85" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <i className="material-icons" style={{fontSize: "40px", color: "#787D8F", marginRight:"14px"}} >home</i>
                        <NavLink exact to="/" id="inicio" >INICIO</NavLink>
                        <NavLink to="/favs" className="list" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}