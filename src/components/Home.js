import React from 'react'

function Home({suspects}) {

    // const topSuspects = suspects.filter((suspect) => suspect.involvement === "Suspect")

    // const topSuspectCards = topSuspects.map((suspect) => {
    //     return (
    //         <
    //     )
    // })

    return (
        <div className="container">
            <h1>You're super duper brave.</h1>
            <hr />
            {suspects}
            <hr />
            <h1>Even Alfred thinks so.</h1>
        </div>
    )

}

export default Home