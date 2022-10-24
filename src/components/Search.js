import React from 'react'

export default function Search ({ search, handleSearch }) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}