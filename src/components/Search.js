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
            {/* Spent a LOT of time trying to get the Boolean values to agree across the board because JSX turned my
            {true} and {false} into "true" and "false"...which are both truthy. Finally got it working and realized 
            you couldn't tell when the filter was engaged...so I ended up changing it to a checkbox, which would have saved
            me HOURS of work. Embarassing on a number of levels, but LESSON LEARNED. 
            
            <button onClick={onFiltered}>{filtered ? "Filter Incarcerated" : "Show Incarcerated"}</button> */}
            <label>
                <input type="checkbox" checked={filtered} onChange={onFiltered}/>
                Filter Incarcerated
            </label>
        </div>
    )
}