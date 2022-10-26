import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <header>
            <nav className="container">
                <div>
                    {/* FORM TO ADD CRIMINALS */}
                    <span className="header--title"><Link to="/suspects/new"><button className="button">Upload</button></Link></span>
                    {/* LINK TO HOMEPAGE */}
                    <span className="header--image"><Link to="/home"><img src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png" width="87.5" alt="Batman Logo" /></Link></span>
                    {/* LINK TO CRIMINALS LIST */}
                    <span className="header--title"><Link to="/suspects"><button className="button">Database</button></Link></span>
                </div>
            </nav>
        </header>
    )
}

export default NavBar