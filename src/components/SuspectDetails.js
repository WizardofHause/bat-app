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

    const { name, 
            involvement, 
            intelligence, 
            strength, 
            speed, 
            durability,
            power,
            combat,
            full_name,
            aliases,
            gender,
            height,
            weight,
            eye_color,
            hair_color,
            occupation,
            affiliations,
            relatives,
            image,
            notes,
            at_large,
            danger_level, 
        } = suspect

    const BMI = ((weight) / (height * height)) * 10000
    const totalStats = (parseInt(intelligence))+(parseInt(strength))+(parseInt(speed))+(parseInt(durability))+(parseInt(power))+(parseInt(combat))         
    const formidabilityScore = Math.round(totalStats/BMI)

    return (
            <section>
                <div className="container">
                    <h2>{name}</h2>
                    <div className="avatar-img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="details">
                        <p>Category: {involvement}</p>
                        <ul className="physical-stats">
                            <li>Full Name: {full_name}</li>
                            <li>Aliases: {aliases}</li>
                            <li>Sex: {gender}</li>
                            <li>Height: {height}cm</li>
                            <li>Weight: {weight}kg</li>
                            <li>Eye Color: {eye_color}</li>
                            <li>Hair Color: {hair_color}</li>
                        </ul>
                        <ul className="power-stats">
                            <li>Intelligence: {intelligence}</li>
                            <li>Strength: {strength}</li>
                            <li>Speed: {speed}</li>
                            <li>Durability: {durability}</li>
                            <li>Power: {power}</li>
                            <li>Combat: {combat}</li>
                        </ul>
                        <div className="scores">
                        <p>Formidability Score: {formidabilityScore}</p>
                        <p>Chaos Quotient: {danger_level}</p>
                        </div>
                        <ul className="bio-stats">
                            <li>Occupation: {occupation}</li>
                            <li>Groups/Affiliations: {affiliations}</li>
                            <li>Known Relatives: {relatives}</li>
                            <li>Status: {at_large ? "AT LARGE" : "INCARCERATED"}</li>
                            <li>Notes: {notes}</li>
                        </ul>
                        <Link to="/suspects"><button className="button">Database</button></Link>
                        <Link to={`/suspects/${id}/edit`}><button className="button">Edit</button></Link>
                    </div>
                </div>
            </section>
    );
};

export default SuspectDetails;