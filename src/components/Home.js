import React from 'react'
import TopSuspectCard from './TopSuspectCard'
import PersonsOfInterestCard from './PersonsOfInterestCard'

function TopSuspects({suspects}) {

    const topSuspectList = suspects.filter((suspect) => suspect.involvement === "Suspect")

    const topSuspectCards = topSuspectList.map((suspect) => {
        return (
            <TopSuspectCard
                key={suspect.id}
                suspect={suspect}
                />
        )
    })

    const personsOfInterest = suspects.filter((suspect) => suspect.involvement === "Person of Interest")

    const personsOfInterestCards = personsOfInterest.map((suspect) => {
        return (
            <PersonsOfInterestCard
                key={suspect.id}
                suspect={suspect}
                />
        )
    })

    return (
        <div className="current">
            <h1>Top Suspects</h1>
            <hr />
            {topSuspectCards}
            <hr />
            <h1>Persons of Interest</h1>
            {personsOfInterestCards}
        </div>
    )

}

export default TopSuspects