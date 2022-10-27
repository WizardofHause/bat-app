import React from 'react'
import SuspectAvatar from "./SuspectAvatar"

function SuspectList({ suspects, search, onDeleteSuspect, onToggleSuspect }) {

    const searchedSuspects = suspects.filter((suspect) =>
        suspect.name.toLowerCase().includes(search.toLowerCase())
        || suspect.full_name.toLowerCase().includes(search.toLowerCase()))


    const suspectAvatar = searchedSuspects.map((suspect) => {
        return (
            <SuspectAvatar
                key={suspect.id}
                suspect={suspect}
                onDeleteSuspect={onDeleteSuspect}
                onToggleSuspect={onToggleSuspect}
            />
        )
    })

    return (
        <section>
            <h2>Noted Criminals / Potential Suspects</h2>
            <div className="container">
                <ul>{suspectAvatar}</ul>
            </div>
        </section>
    )
}

export default SuspectList