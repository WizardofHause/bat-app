import React from "react";
import SuspectList from "./SuspectList"
import Search from "./Search"
// import SuspectDetails from "./SuspectDetails"
// import { Routes, Route } from "react-router-dom"


export default function SuspectContainer({ suspects, search, onSearch, onToggleSuspect, onDeleteSuspect, filtered, onFiltered }) {
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
{/* 
            <Router>
                <Routes>
                    <Route path="/suspects/:id" element={<SuspectDetails/>}/>
                </Routes>
            </Router> */}
        </div>
    )
}