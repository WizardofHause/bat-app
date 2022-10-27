import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const initialState = {
    name: "",
    involvement: "",
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: "",
    full_name: "",
    aliases: "",
    gender: "",
    height: "",
    weight: "",
    eye_color: "",
    hair_color: "",
    occupation: "",
    affiliations: "",
    relatives: "",
    image: "",
    notes: "",
    at_large: true,
    danger_level: 0
}

function EditSuspectForm({ onUpdateSuspect }) {
    const [formData, setFormData] = useState(initialState)

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
        danger_level,
    } = formData

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/suspects/${id}`)
            .then((r) => r.json())
            .then((suspect) => setFormData(suspect))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/suspects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((updatedSuspect) => {
                onUpdateSuspect(updatedSuspect);
                navigate.push(`/suspects/${id}`);
                navigate(`/suspects/${id}`)
            });
    };

    return (
        <section className="form-section">
            <div className="div-box">
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Input Suspect Data</h3>
                    <label htmlFor="name">Title</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={name}
                    />
                    <label htmlFor="image">Photo</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        value={image}
                    />
                    <img 
                        className="avatar-img" 
                        src={image} alt={name} 
                        placeholder=" " 
                    />
                    <label htmlFor="involvement">Category</label>
                    <select
                        name="involvement"
                        id="involvement"
                        onChange={handleChange}
                        value={involvement}
                    >
                        <option value="">-</option>
                        <option value="Unaffiliated">Unaffiliated</option>
                        <option value="Person of Interest">Person of Interest</option>
                        <option value="Suspect">Suspect</option>
                        <option value="Perpetrator">Perpetrator</option>
                    </select>
                    <div className="physical">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            onChange={handleChange}
                            value={full_name}
                        />
                        <label htmlFor="aliases">Aliases</label>
                        <input
                            type="text"
                            id="aliases"
                            name="aliases"
                            onChange={handleChange}
                            value={aliases}
                        />
                        <label htmlFor="gender">Sex</label>
                        <select
                            name="gender"
                            id="gender"
                            onChange={handleChange}
                            value={gender}
                        >
                            <option value="">-</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-Binary</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="height">Height</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            min="1"
                            max="300"
                            onChange={handleChange}
                            value={height}
                        />
                        <label htmlFor="weight">Weight</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            min="1"
                            max="300"
                            onChange={handleChange}
                            value={weight}
                        />
                        <label htmlFor="eye_color">Eye Color</label>
                        <input
                            type="text"
                            id="eye_color"
                            name="eye_color"
                            onChange={handleChange}
                            value={eye_color}
                        />
                        <label htmlFor="hair_color">Hair Color</label>
                        <input
                            type="text"
                            id="hair_color"
                            name="hair_color"
                            onChange={handleChange}
                            value={hair_color}
                        />
                    </div>
                    <div className="power">
                        <label htmlFor="intelligence">Intelligence</label>
                        <input
                            type="number"
                            id="intelligence"
                            name="intelligence"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={intelligence}
                        />
                        <label htmlFor="strength">Strength</label>
                        <input
                            type="number"
                            id="strength"
                            name="strength"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={strength}
                        />
                        <label htmlFor="speed">Speed</label>
                        <input
                            type="number"
                            id="speed"
                            name="speed"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={speed}
                        />
                        <label htmlFor="durability">Durability</label>
                        <input
                            type="number"
                            id="durability"
                            name="durability"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={durability}
                        />
                        <label htmlFor="power">Power</label>
                        <input
                            type="number"
                            id="power"
                            name="power"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={power}
                        />
                        <label htmlFor="combat">Combat</label>
                        <input
                            type="number"
                            id="combat"
                            name="combat"
                            min="1"
                            max="100"
                            step="1"
                            onChange={handleChange}
                            value={combat}
                        />
                        <label htmlFor="danger_level">Chaos Quotient</label>
                        <input
                            type="number"
                            id="danger_level"
                            name="danger_level"
                            min="0"
                            max="10"
                            step="1"
                            onChange={handleChange}
                            value={danger_level}
                        />
                    </div>
                    <div className="bio">
                        <label htmlFor="occupation">Occupation</label>
                        <input
                            type="text"
                            id="occupation"
                            name="occupation"
                            value={occupation}
                            onChange={handleChange}
                        />

                        <label htmlFor="affiliations">Affiliations</label>
                        <textarea
                            id="affiliations"
                            name="affiliations"
                            value={affiliations}
                            onChange={handleChange}
                        />
                        <label htmlFor="relatives">Known Relatives</label>
                        <textarea
                            id="relatives"
                            name="relatives"
                            value={relatives}
                            onChange={handleChange}
                        />
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="add-button" type="submit">Save</button>
                </form>
            </div>
            <div>
                <Link to={`/suspects/${id}`}><button className="button">Details</button></Link>
                <Link to="/suspects"><button className="button">Database</button></Link>
            </div>
        </section>
    )
}

export default EditSuspectForm