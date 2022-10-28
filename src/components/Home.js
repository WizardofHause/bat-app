import React from 'react'
import TopSuspectCard from './TopSuspectCard'
import PersonsOfInterestCard from './PersonsOfInterestCard'

function Home({suspects}) {

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
        <div className="container">
            <h1>Top Suspects</h1>
            <hr />
            {topSuspectCards}
            <hr />
            {personsOfInterestCards}
        </div>
    )

}

export default Home