import React from 'react'
import TopSuspectCard from './TopSuspectCard'
import PersonsOfInterestCard from './PersonsOfInterestCard'

function TopSuspects({ suspects }) {

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
            <div>
                <h1>Current Top Suspects</h1>
                {topSuspectCards}
            </div>
            <div>
                <h1 className="current--poi">Current Persons of Interest</h1>
                {personsOfInterestCards}
            </div>
        </div>
    )

}

export default TopSuspects