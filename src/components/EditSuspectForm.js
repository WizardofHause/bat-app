import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const initialState = {
    alias: "",
    name: "",
    image: "",
    description: "",
    at_large: "",
    category: 0,
};

function EditSuspectForm({ onUpdateSuspect }) {
    const [formData, setFormData] = useState(initialState)

    const { alias, name, image, description, at_large, category } = formData

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
        <section>
            <form className="container" onSubmit={handleSubmit}>
                <label htmlFor="alias">Alias</label>
                <input
                    type="text"
                    id="alias"
                    name="alias"
                    onChange={handleChange}
                    value={alias}
                />
                <label htmlFor="image">Photo</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    value={image}
                />
                <img className="avatar-img" src={image} alt="Enter an image URL" />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={name}
                />
                <label htmlFor="description">Description
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="category">Category
                    <select
                        name="category"
                        value={category}
                        onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label>
                    <select name="at_large" value={at_large} onChange={handleChange}>
                        <option value="true">AT LARGE</option>
                        <option value="false">INCARCERATED</option>
                    </select>
                </label>
                <button className="update-button" type="submit">Update Suspect</button>
                {/* BUTTON TO GO BACK TO DATABASE */}
            </form>
            <Link to={`/suspects/${id}`}><button className="button">Suspect Details</button></Link>
            <Link to="/suspects"><button className="button">Back to Database</button></Link>
        </section>
    );


    //   return (
    //     <section className="form-section">
    //         <form className="container" onSubmit={handleSubmit}>
    //             <h3>Update Suspect Data</h3>

    //             <label htmlFor="alias">Alias</label>
    //             <input
    //                 type="text"
    //                 id="alias"
    //                 name="alias"
    //                 onChange={handleChange}
    //                 value={alias}
    //             />
    // <label htmlFor="name">Name</label>
    // <input
    //     type="text"
    //     id="name"
    //     name="name"
    //     onChange={handleChange}
    //     value={name}
    // />
    // <label htmlFor="image">Photo</label>
    // <input
    //     type="text"
    //     id="image"
    //     name="image"
    //     onChange={handleChange}
    //     value={image}
    // />
    // <label htmlFor="description">Description
    //     <textarea
    //         id="description"
    //         name="description"
    //         value={description}
    //         onChange={handleChange}
    //     />
    // </label>
    // <label htmlFor="category">Category
    //     <select
    //         name="category"
    //         value={category}
    //         onChange={handleChange}
    //     >
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //         <option value="5">5</option>
    //         <option value="6">6</option>
    //         <option value="7">7</option>
    //         <option value="8">8</option>
    //         <option value="9">9</option>
    //         <option value="10">10</option>
    //     </select>
    // </label>
    // <label>
    //     <select value={at_large} onChange={handleChange}>
    //         <option value="true">AT LARGE</option>
    //         <option value="false">INCARCERATED</option>
    //     </select>
    // </label>
    //             <button className="update-button" type="submit">Update Suspect</button>
    //             <Link to="/suspects/"><button className="button">Back to Database</button></Link>
    //             <Link to={`/suspects/${id}`}><button className="button">Suspect Details</button></Link>
    //         </form>
    //     </section>
    // )
}

export default EditSuspectForm