import React from 'react'

function NavBar() {
    return (
        <header>
            <nav className="header">
                <div className="links">
                    {/* FORM TO ADD CRIMINALS */}
                    <span className="button">Upload</span>
                    {/* TO HOME */}
                    <span className="button">Home</span>
                    {/* TO CRIMINALS PAGE */}
                    <span className="button">Database</span>
                </div>
            </nav>
        </header>
    )
}

export default NavBar