import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <header className="nav-container">
            {/* LINK TO HOMEPAGE : AS BATMAN SYMBOL */}
            <Link to="/">
                <img
                    src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png"
                    alt="Batman Logo"
                    className="nav--image"
                />
            </Link>
            <nav>
                <ul>
                    {/* FORM TO ADD CRIMINALS */}
                    <Link to="/suspects/new" className="navbar--link">
                        <li className="nav--title">Upload</li>
                    </Link>
                    {/* LINK TO CRIMINALS LIST */}
                    <Link to="/suspects" className="navbar--link">
                        <li className="nav--title">Database</li>
                    </Link>
                    <Link to="/home" className="navbar--link">
                        <li className="nav--title">Current</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar