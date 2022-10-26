import React, { useState } from 'react';

const initialState = {
    alias: "",
    name: "",
    image: "",
    description: "",
    at_large: true,
    category: 0
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

                    <label htmlFor="alias">Alias</label>
                    <input
                        type="text"
                        id="alias"
                        name="alias"
                        onChange={handleChange}
                        value={formData.alias}
                    />
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="description">Description
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="category">Category
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {/* MAKE CATEGORIES */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="DECEASED">DECEASED</option>
                        </select>
                    </label>
                    <button className="add-button" type="submit">Add Suspect</button>
                </form>
            </div>
        </section>
    )
}

export default SuspectForm