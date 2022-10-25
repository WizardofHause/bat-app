import React, { useEffect, useState } from "react";

const SuspectDetails = ({ onDeleteSuspect }) => {
    const [suspect, setSuspect] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [atLarge, setAtLarge] = useState(true)


    const id = 5

    useEffect(() => {
        fetch(`http://localhost:3000/suspects/${id}`)
            .then((r) => r.json())
            .then((suspect) => {
                setSuspect(suspect);
                setIsLoaded(true);
            });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { alias, name, image, description, category } = suspect

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
        <section>
            <div className="suspect-detail box">
                <h4>{alias}</h4>
                <img className="avatar-img" src={image} alt={alias} />
                <p>{name}</p>
                <p>{description}</p>
                <p>Category: {category}</p>
                {atLarge ? (<button onClick={handleCaptured} className="button">AT LARGE</button>) : (<button onClick={handleAtLarge} className="button">CAPTURED</button>)}
                <button className="button" onClick={handleDeleteClick}>DECEASED</button>
            </div>
        </section>
    );
};

export default SuspectDetails;