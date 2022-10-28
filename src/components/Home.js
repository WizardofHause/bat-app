import React from 'react'
import TopSuspectCard from './TopSuspectCard'

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

    return (
        <div className="container">
            <h1>Top Suspects</h1>
            <hr />
            {topSuspectCards}
            <hr />
        </div>
    )

}

export default Home