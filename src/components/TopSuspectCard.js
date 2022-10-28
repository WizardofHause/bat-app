import React from "react"
import { useNavigate } from "react-router-dom"

function TopSuspectCard({suspect}) {
    const { id, name, image, at_large, involvement } = suspect
    const navigate = useNavigate();

    function showDetails() {
        navigate(`/suspects/${id}`)
    }

    return(
        <li className="avatar">
                <figure className="container">
                    <h4>{name}</h4>
                    <h6>{involvement}</h6>
                    <p className={at_large ? "at-large" : "captured"}>{at_large ? "AT LARGE" : "INCARCERATED"}</p>
                    <img className="avatar-img" src={image} alt={name} onClick={showDetails}/>
                </figure>
        </li>
    )
}

export default TopSuspectCard