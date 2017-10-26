import React from "react";
import { NavLink } from 'react-router-dom'


export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"  >
                        <NavLink to="/home" className="nav-link" activeClassName={"active"} >Home</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink to="/user" className="nav-link" activeClassName={"active"}>user</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

