import React from 'react'

export default function Search ({ search, handleSearch }) {
    return (
        <div className="container">
            <input 
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}