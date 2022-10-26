import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

const SuspectDetails = () => {
    const [suspect, setSuspect] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
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

    const { alias, name, image, description, category, at_large } = suspect

    return (
        <section>
            <div className="suspect-detail box">
                <h4>{alias}</h4>
                <img className="avatar-img" src={image} alt={alias} />
                <p>{name}</p>
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Status: {at_large ? "AT LARGE" : "INCARCERATED"}</p>
                {/* BUTTON TO GO BACK TO DATABASE */}
                <Link to="/suspects"><button className="button">Back to Database</button></Link>
            </div>
        </section>
    );
};

export default SuspectDetails;