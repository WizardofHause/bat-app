import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <header>
            <nav className="header">
                <div className="links">
                    {/* FORM TO ADD CRIMINALS */}
                    <Link to="/form" className="button">Upload</Link>
                    {/* LINK TO HOMEPAGE */}
                    {/* <Link to="/home" className="button">Home</Link> */}
                    {/* LINK TO CRIMINALS LIST */}
                    <Link to="/suspects" className="button">Database</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar