import React from "react";
import SuspectList from "./SuspectList"
import Search from "./Search"
import SuspectDetails from "./SuspectDetails"
import { Routes, Route } from "react-router-dom"

function SuspectContainer({
    suspects,
    search,
    onSearch,
    onToggleSuspect,
    onDeleteSuspect,
    filtered,
    onFiltered }) {
    return (
        <div>
            <Search
                search={search}
                onSearch={onSearch}
                onFiltered={onFiltered}
            />
            <SuspectList
                suspects={suspects}
                search={search}
                onDeleteSuspect={onDeleteSuspect}
                onToggleSuspect={onToggleSuspect}
                filtered={filtered}
            />
            <Routes>
                <Route path="/suspects/:id" element={<SuspectDetails />} />
            </Routes>
        </div>
    )
}

export default SuspectContainer