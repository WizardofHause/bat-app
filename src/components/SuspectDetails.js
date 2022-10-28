import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

const SuspectDetails = () => {
    const [suspect, setSuspect] = useState(null);

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/suspects/${id}`)
            .then((r) => r.json())
            .then((suspect) => {
                setSuspect(suspect);
            });
    }, [id]);

    if (!suspect) return <div></div>;

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
    const totalStats = (parseInt(intelligence)) + (parseInt(strength)) + (parseInt(speed)) + (parseInt(durability)) + (parseInt(power)) + (parseInt(combat))
    const formidabilityScore = Math.round(totalStats / BMI)

    return (
        <section>
            <div className="container">
                <h2>{name}</h2>
                <div>
                    <img src={image} alt={name} className="avatar-img"/>
                </div>
                <div className="details">
                    <dl>
                        <dt>Category:</dt>
                        <dd>{involvement}</dd>
                        <dt>Status:</dt>
                        <dd>{at_large ? "AT LARGE" : "INCARCERATED"}</dd>
                    </dl>
                    <dl className="physical-stats">
                        <dt>Full Name:</dt>
                        <dd>{full_name}</dd>
                        {aliases? <><dt>Aliases:</dt>
                        <dd>{aliases}</dd></> : null}
                        <dt>Sex:</dt>
                        <dd>{gender}</dd>
                        <dt>Height:</dt>
                        <dd>{height}cm</dd>
                        <dt>Weight:</dt>
                        <dd>{weight}kg</dd>
                        <dt>Eye Color:</dt>
                        <dd>{eye_color}</dd>
                        <dt>Hair Color:</dt>
                        <dd>{hair_color}</dd>
                    </dl>
                    <dl className="power-stats">
                        <dt>Intelligence:</dt>
                        <dd>{intelligence}</dd>
                        <dt>Strength:</dt>
                        <dd>{strength}</dd>
                        <dt>Speed:</dt>
                        <dd>{speed}</dd>
                        <dt>Durability:</dt>
                        <dd>{durability}</dd>
                        <dt>Power:</dt>
                        <dd>{power}</dd>
                        <dt>Combat:</dt>
                        <dd>{combat}</dd>
                    </dl>
                    <dl className="scores">
                        <dt className="scores-dt">Danger Lvl:</dt> 
                        <dd className="scores-dd">{formidabilityScore}</dd>
                        <dt className="scores-dt">Chaos Lvl:</dt> 
                        <dd className="scores-dd">{danger_level}</dd>
                    </dl>
                    <dl className="scores">
                        {occupation? <><dt>Occupation:</dt>
                        <dd>{occupation}</dd></> : null}
                        <dt>Affiliations:</dt>
                        <dd>{affiliations}</dd>
                        <dt>Relatives:</dt>
                        <dd>{relatives}</dd>
                        <dt>Notes:</dt>
                        <dd>{notes}</dd>
                    </dl>
                    <Link to="/suspects"><button className="button">Database</button></Link>
                    <Link to={`/suspects/${id}/edit`}><button className="button">Edit</button></Link>
                </div>
            </div>
        </section>
    );
};

export default SuspectDetails;