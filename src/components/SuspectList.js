import React from 'react'
import SuspectAvatar from "./SuspectAvatar"

function SuspectList({ suspects, search, onDeleteSuspect, onToggleSuspect, filtered }) {

    const searchedSuspects = suspects.filter((suspect) =>
        suspect.name.toLowerCase().includes(search.toLowerCase())
        || suspect.full_name.toLowerCase().includes(search.toLowerCase()))

    const filteredSuspects = filtered ? searchedSuspects.filter((suspect) => (suspect.at_large !== (false) && suspect.at_large !== (''))) :
        searchedSuspects

    const suspectAvatar = filteredSuspects.map((suspect) => {
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