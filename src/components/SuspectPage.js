import React from 'react'
import SuspectAvatar from "./SuspectAvatar"

function SuspectPage({ suspects, search, onDeleteSuspect }) {

    const searchedSuspects = suspects.filter((suspect) => 
    suspect.alias.toLowerCase().includes(search.toLowerCase()))


    const suspectAvatar = searchedSuspects.map((suspect) => {
        return (
            <SuspectAvatar
                key={suspect.id}
                suspect={suspect}
                onDeleteSuspect={onDeleteSuspect}
            />
        )
    })

    return (
        <section>
            <h2>Noted Criminals / Potential Suspects</h2>
            <div className="container">{suspectAvatar}</div>
        </section>
    )
}

export default SuspectPage