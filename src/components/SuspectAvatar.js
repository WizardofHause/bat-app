import React, { useState } from "react"

function SuspectAvatar({ suspect, onDeleteSuspect }) {
    const { id, alias, name, image, description, category } = suspect

    const [atLarge, setAtLarge] = useState(true)

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/suspects/${id}`, {
            method: "DELETE",
        });
        onDeleteSuspect(suspect)
            .then((r) => console.log(r))
            .then(onDeleteSuspect(suspect));
    };

    const handleAtLarge = (atLarge) => setAtLarge(!atLarge)

    return (
        <li className="avatar">
            <figure className="container">
                <h4>{alias}</h4>
                <img className="avatar-img" src={image} alt={alias} />
                <p>{name}</p>
                <p>{description}</p>
                <p>Category: {category}</p>
                {atLarge ? (<button onClick={handleAtLarge} className="button">AT LARGE</button>) : (<button onClick={handleAtLarge} className="button">CAPTURED</button>)}
                <button className="button" onClick={handleDeleteClick}>DECEASED</button>
            </figure>
        </li>
    )
}

export default SuspectAvatar