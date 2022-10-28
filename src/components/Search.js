import React from 'react'

export default function Search({ search, onSearch, onFiltered, filtered }) {



    return (
        <div className="container">
            <input
                id="search"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={onSearch}
            />
            {/* <button onClick={onFiltered}>{filtered ? "Filter Incarcerated" : "Show Incarcerated"}</button> */}
            <label>
                <input type="checkbox" checked={filtered} onChange={onFiltered}/>
                Filter Incarcerated
            </label>
        </div>
    )
}