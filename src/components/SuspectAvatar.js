import React from "react"
import { Link } from "react-router-dom"

function SuspectAvatar({ suspect, onDeleteSuspect, onToggleSuspect }) {
    const { id, alias, image, at_large } = suspect

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/suspects/${id}`, {
            method: "DELETE",
        });
        onDeleteSuspect(suspect)
            .then((r) => console.log(r))
            .then(onDeleteSuspect(suspect));
    };

    const handleFreedomClick = () => {
        fetch(`http://localhost:3000/suspects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                at_large: !at_large,
            }),
        })
        .then((r) => r.json())
        .then((toggledSuspect) => onToggleSuspect(toggledSuspect))
    }

    return (
        <li className="avatar">
                <figure className="container">
                    <h4>{alias}</h4>
                    <Link to={`/suspects/${id}`}><img className="avatar-img" src={image} alt={alias} /></Link>
                        <button className={at_large ? "at-large" : "captured"} onClick={handleFreedomClick}>{at_large ? "AT LARGE" : "INCARCERATED"}</button>
                    <button className="button" onClick={handleDeleteClick}>DECEASED</button>
                    <Link to={`/suspects/${id}/edit`}><button className="button">Edit</button></Link>
                </figure>
        </li>
    )
}

export default SuspectAvatar