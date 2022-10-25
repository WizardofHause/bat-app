import React, { useState } from "react"
import { Link } from "react-router-dom"

function SuspectAvatar({ suspect, onDeleteSuspect }) {
    const { id, alias, image, at_large } = suspect

    const [atLarge, setAtLarge] = useState(at_large)

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/suspects/${id}`, {
            method: "DELETE",
        });
        onDeleteSuspect(suspect)
            .then((r) => console.log(r))
            .then(onDeleteSuspect(suspect));
    };

    const handleAtLarge = (e) => setAtLarge(!e.target.value)

    const handleCaptured = (atLarge) => setAtLarge(!atLarge)

    return (
        <li className="avatar">
                <figure className="container">
                    <h4>{alias}</h4>
                    <Link to={`/suspects/${id}`}><img className="avatar-img" src={image} alt={alias} /></Link>
                    {atLarge ? (<button onClick={handleCaptured} className="button">AT LARGE</button>) : (<button onClick={handleAtLarge} className="button">CAPTURED</button>)}
                    <button className="button" onClick={handleDeleteClick}>DECEASED</button>
                </figure>
        </li>
    )
}

export default SuspectAvatar