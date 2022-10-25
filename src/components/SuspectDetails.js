import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

const SuspectDetails = ({ onDeleteSuspect }) => {
    const [suspect, setSuspect] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [atLarge, setAtLarge] = useState(true)
    const { id } = useParams()

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
            <Link to="/home"><img src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png" width="175" alt="Batman Logo" /></Link>
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