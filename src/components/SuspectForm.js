import React, { useState } from 'react';

function SuspectForm({ onAddSuspect }) {
    const [formData, setFormData] = useState({
        alias: "",
        name: "",
        image: "",
        description: "",
        at_large: true,
        category: 0
    })

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
                setFormData({
                    alias: "",
                    name: "",
                    image: "",
                    description: "",
                    at_large: true,
                    category: 0
                })
            })
    }


    return (
        <section>
            <form className="suspect-form" onSubmit={handleSubmit}>
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
                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                />
                <button className="add-button" type="submit">Add Suspect</button>
            </form>
        </section>
    )
}

export default SuspectForm