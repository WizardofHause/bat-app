import React from "react"
import { useNavigate } from "react-router-dom"

function PersonsOfInterestCard({suspect}) {
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

    const BMI = ((weight) / (height * height)) * 10000
    const totalStats = (parseInt(intelligence)) + (parseInt(strength)) + (parseInt(speed)) + (parseInt(durability)) + (parseInt(power)) + (parseInt(combat))
    const formidabilityScore = Math.round(totalStats / BMI)

    const navigate = useNavigate();

    function showDetails() {
        navigate(`/suspects/${id}/edit`)
    }

    return(
        <li className="avatar">
                <figure className="container">
                    <h3>{involvement}</h3>
                    <h4>{name}</h4>
                    <h4>Name: {full_name}</h4>
                    <p className={at_large ? "at-large" : "captured"}>Status: {at_large ? "AT LARGE" : "INCARCERATED"}</p>
                    <img className="avatar-img" src={image} alt={name} onClick={showDetails}/>
                    <p>Danger Lvl: {formidabilityScore}</p>
                    <p>Chaos Lvl: {danger_level}</p>
                    <p>Notes: {notes}</p>
                </figure>
        </li>
    )
}

export default PersonsOfInterestCard