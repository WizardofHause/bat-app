import React from "react"
import { Link, useNavigate } from "react-router-dom"

function SuspectAvatar({ suspect, onDeleteSuspect, onToggleSuspect }) {
    const { id, name, image, at_large } = suspect
    const navigate = useNavigate();

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

    function showDetails() {
        navigate(`/suspects/${id}`)
    }

    return (
        <div className={at_large ? "free" : "avatar"}>
            <li>
                <figure >
                    <h2>{name}</h2>
                    <img className="avatar-img" src={image} alt={name} onClick={showDetails} />
                    <button
                        className={at_large ? "at-large" : "captured"}
                        onClick={handleFreedomClick}
                    >
                        {at_large ? "AT LARGE" : "INCARCERATED"}
                    </button>
                    <Link to={`/suspects/${id}/edit`}><button className="button">Edit</button></Link>
                    <button className="button" onClick={handleDeleteClick}>Erase</button>
                </figure>
            </li>
        </div>
    )
}

export default SuspectAvatar