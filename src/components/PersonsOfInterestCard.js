import React from "react"
import { useNavigate } from "react-router-dom"

function PersonsOfInterestCard({ suspect }) {
    const {
        id,
        name,
        involvement,
        intelligence,
        strength,
        speed,
        durability,
        power,
        combat,
        full_name,
        height,
        weight,
        image,
        notes,
        at_large,
        danger_level,
    } = suspect

    //FUN LITTLE CALCULATED STAT BASED ON POWER STATS AND CHARACTER BMI
    const BMI = ((weight) / (height * height)) * 10000
    const totalStats =
        (parseInt(intelligence))
        + (parseInt(strength))
        + (parseInt(speed))
        + (parseInt(durability))
        + (parseInt(power))
        + (parseInt(combat))
    const formidabilityScore = Math.round(totalStats / BMI)

    const navigate = useNavigate();

    function showDetails() {
        navigate(`/suspects/${id}/edit`)
    }

    return (
        <div className="poi">
            <li>
                <h2>{involvement}: {name}</h2>
                <img className="poi-img" src={image} alt={name} onClick={showDetails} />
                <p>Name: {full_name}</p>
                <p>Status: {at_large ? "AT LARGE" : "INCARCERATED"}</p>
                <p>Danger Lvl: {formidabilityScore}</p>
                <p>Chaos Lvl: {danger_level}</p>
                <p>Notes: {notes}</p>
            </li>
        </div>
    )
}

export default PersonsOfInterestCard