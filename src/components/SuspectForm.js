import React, { useState } from 'react';

const initialState = {
    name: "",
    status: "",
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

function SuspectForm({ onAddSuspect }) {
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/suspects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({ ...formData })
        })
            .then((r) => r.json())
            .then((suspect) => {
                onAddSuspect(suspect);
                setFormData(initialState)
            })
    }


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
                        value={formData.name}
                    />
                    <label htmlFor="image">Photo</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        value={formData.image}
                    />
                    <label htmlFor="status">Category</label>
                    <select
                        name="status"
                        id="status"
                        onChange={handleChange}
                        value={formData.status}
                    >
                        <option value="">-</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Ally">Ally</option>
                    </select>
                    <div className="physical">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            onChange={handleChange}
                            value={formData.full_name}
                        />
                        <label htmlFor="aliases">Aliases</label>
                        <input
                            type="text"
                            id="aliases"
                            name="aliases"
                            onChange={handleChange}
                            value={formData.aliases}
                        />
                        <label htmlFor="gender">Sex</label>
                        <select
                            name="gender"
                            id="gender"
                            onChange={handleChange}
                            value={formData.gender}
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
                            value={formData.height}
                        />
                        <label htmlFor="weight">Weight</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            min="1"
                            max="300"
                            onChange={handleChange}
                            value={formData.weight}
                        />
                        <label htmlFor="eye_color">Eye Color</label>
                        <input
                            type="text"
                            id="eye_color"
                            name="eye_color"
                            onChange={handleChange}
                            value={formData.eye_color}
                        />
                        <label htmlFor="hair_color">Hair Color</label>
                        <input
                            type="text"
                            id="hair_color"
                            name="hair_color"
                            onChange={handleChange}
                            value={formData.hair_color}
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
                            value={formData.intelligence}
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
                            value={formData.strength}
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
                            value={formData.speed}
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
                            value={formData.durability}
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
                            value={formData.power}
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
                            value={formData.combat}
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
                                value={formData.danger_level}
                            />
                    </div>
                    <div className="bio">
                        <label htmlFor="occupation">Occupation</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                            />
                        
                        <label htmlFor="affiliations">Affiliations</label>
                            <textarea
                                id="affiliations"
                                name="affiliations"
                                value={formData.affiliations}
                                onChange={handleChange}
                            />
                        <label htmlFor="relatives">Known Relatives</label>
                            <textarea
                                id="relatives"
                                name="relatives"
                                value={formData.relatives}
                                onChange={handleChange}
                            />
                        <label htmlFor="notes">Notes</label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                            />
                    </div>
                    <button className="add-button" type="submit">Add Suspect</button>
                </form>
            </div>
        </section>
    )
}

export default SuspectForm