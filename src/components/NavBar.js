import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <header>
            <nav className="header">
                <div className="links">
                    {/* FORM TO ADD CRIMINALS */}
                    <Link to="/suspects/new" className="button">Upload</Link>
                    {/* LINK TO HOMEPAGE */}
                    <Link to="/home"><img src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png" width="175" alt="Batman Logo" /></Link>
                    {/* LINK TO CRIMINALS LIST */}
                    <Link to="/suspects" className="button">Database</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar