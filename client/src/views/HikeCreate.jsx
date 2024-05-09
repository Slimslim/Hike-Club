import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HikeCreate = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [hike, setHike] = useState({
        hike_name: "",
        location: "",
        distance: 0,
        difficulty: "Select Difficulty",
        amenities: [],
        rating: 0,
        description: "",
        date: ""
    });

    const validateForm = () => {
        const errors = {};
        if (hike.hike_name.length < 3) {
            errors.hike_name = "Hike name must be at least 3 characters";
        }
        if (hike.location.length < 3) {
            errors.location = "Location must be at least 3 characters";
        }
        if (hike.distance <= 0) {
            errors.distance = "Distance must be greater than 0";
        }
        if (!["very easy", "easy", "moderate", "difficult", "very difficult"].includes(hike.difficulty)) {
            errors.difficulty = "Invalid difficulty";
        }
        if (hike.amenities.length === 0) {
            errors.amenities = "Please select at least one amenity";
        }
        if (hike.rating < 1 || hike.rating > 5) {
            errors.rating = "Rating must be between 1 and 5";
        }
        if (hike.description.length < 5) {
            errors.description = "Description must be at least 5 characters";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            if (checked) {
                // Add the value to the amenities array if it's checked
                setHike((prevHike) => ({
                    ...prevHike,
                    amenities: [...prevHike.amenities, value],
                }));
            } else {
                // Remove the value from the amenities array if it's unchecked
                setHike((prevHike) => ({
                    ...prevHike,
                    amenities: prevHike.amenities.filter((item) => item !== value),
                }));
            }
        } else {
            setHike({ ...hike, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                await axios.post("http://localhost:9999/api/v1", hike);
                navigate("/home");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="full_screen_background">
            <TopBanner />
            <div className="container d-flex justify-content-center align-items-center h-80">
                <div className="card p-4 bg-light bg-opacity-50">
                    <h1 className="mb-4">Create Hike</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="hikeName">
                            <Form.Label>Hike Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="hike_name"
                                value={hike.hike_name}
                                onChange={handleChange}
                            />
                            {errors.hike_name && <h2 className="errors">{errors.hike_name}</h2>}
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={hike.location}
                                onChange={handleChange}
                            />
                            {errors.location && <h2 className="errors">{errors.location}</h2>}
                        </Form.Group>

                        <Form.Group controlId="distance">
                            <Form.Label>Distance In Miles</Form.Label>
                            <Form.Control
                                type="number"
                                name="distance"
                                value={hike.distance}
                                onChange={handleChange}
                            />
                            {errors.distance && <h2 className="errors">{errors.distance}</h2>}
                        </Form.Group>

                        <Form.Group controlId="difficulty">
                            <Form.Label>Difficulty</Form.Label>
                            <Form.Control
                                as="select"
                                name="difficulty"
                                value={hike.difficulty}
                                onChange={handleChange}
                            >
                                <option value="Select Difficulty">Select Difficulty</option>
                                <option value="very easy">Very Easy</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                                <option value="very difficult">Very Difficult</option>
                            </Form.Control>
                            {errors.difficulty && <h2 className="errors">{errors.difficulty}</h2>}
                        </Form.Group>

                        <Form.Group controlId="amenities">
                            <Form.Label>Amenities</Form.Label>
                            <div>
                                <input type="checkbox" id="bathroom" name="amenities" value="bathroom" checked={hike.amenities.includes("bathroom")} onChange={handleChange} />
                                <label htmlFor="bathroom">Bathroom</label>
                            </div>
                            <div>
                                <input type="checkbox" id="water" name="amenities" value="water" checked={hike.amenities.includes("water")} onChange={handleChange} />
                                <label htmlFor="water">Water</label>
                            </div>
                            <div>
                                <input type="checkbox" id="parking" name="amenities" value="parking" checked={hike.amenities.includes("parking")} onChange={handleChange} />
                                <label htmlFor="parking">Parking</label>
                            </div>
                            <div>
                                <input type="checkbox" id="dogFriendly" name="amenities" value="dog-friendly" checked={hike.amenities.includes("dog-friendly")} onChange={handleChange} />
                                <label htmlFor="dogFriendly">Dog-friendly</label>
                            </div>
                            <div>
                                <input type="checkbox" id="picnicAreas" name="amenities" value="picnic areas" checked={hike.amenities.includes("picnic areas")} onChange={handleChange} />
                                <label htmlFor="picnicAreas">Picnic Areas</label>
                            </div>
                            <div>
                                <input type="checkbox" id="scenicViewpoints" name="amenities" value="scenic viewpoints" checked={hike.amenities.includes("scenic viewpoints")} onChange={handleChange} />
                                <label htmlFor="scenicViewpoints">Scenic Viewpoints</label>
                            </div>
                            {errors.amenities && <h2 className="errors">{errors.amenities}</h2>}
                        </Form.Group>

                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="number"
                                name="rating"
                                value={hike.rating}
                                onChange={handleChange}
                            />
                            {errors.rating && <h2 className="errors">{errors.rating}</h2>}
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={hike.description}
                                onChange={handleChange}
                            />
                            {errors.description && <h2 className="errors" >{errors.description}</h2>}
                        </Form.Group>

                        <Button type="submit" variant="primary">Create Hike</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default HikeCreate;
