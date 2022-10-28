import React from 'react'

export default function Search({ search, onSearch, onFiltered }) {



    return (
        <div className="container">
            <input
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onSearch}
            />
            <button onClick={onFiltered}>Filter Incarcerated</button>
        </div>
    )
}