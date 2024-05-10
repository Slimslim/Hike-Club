import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// imports for userContext
import { userContext } from "../context/userContext";
import { getUserById } from "../services/LoginService";
import TopBanner from "../components/TopBanner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HikeUpdate = (props) => {
    // Variables to get logged in username
    const { user, setUser } = useContext(userContext);
    const userId = window.localStorage.getItem("UUID");

    // Get user username information
    useEffect(() => {
        getUserById(userId)
            .then((res) => {
                console.log(res);
                setUser(res);
            })
            .catch((err) => {
                setErrors(err);
            });
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [hike, setHike] = useState({
        hike_name: "",
        location: "",
        distance: 0,
        difficulty: "moderate",
        amenities: [],
        ratings: 0,
        description: "",
        date: "",
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/hike/${id}`)
            .then((res) => {
                setHike(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

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
        if (
            ![
                "very easy",
                "easy",
                "moderate",
                "difficult",
                "very difficult",
            ].includes(hike.difficulty)
        ) {
            errors.difficulty = "Invalid difficulty";
        }
        if (hike.amenities.length === 0) {
            errors.amenities = "Please select at least one amenity";
        }
        if (hike.ratings < 1 || hike.ratings > 5) {
            errors.ratings = "Rating must be between 1 and 5";
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
                setHike((prevHike) => ({
                    ...prevHike,
                    amenities: [...prevHike.amenities, value],
                }));
            } else {
                setHike((prevHike) => ({
                    ...prevHike,
                    amenities: prevHike.amenities.filter(
                        (item) => item !== value
                    ),
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
                await axios.put(
                    `http://localhost:8000/api/v1/hike/${id}`,
                    hike
                );
                navigate("/home");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <div className="full_screen_background">
                <TopBanner loggedUser={user.username} />

                <div className="container d-flex justify-content-center align-items-center h-80">
                    <div className="card p-4 bg-light bg-opacity-50">
                        <h1 className="mb-4">Update Hike</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="hikeName">
                                <Form.Label>Hike Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="hike_name"
                                    value={hike.hike_name}
                                    onChange={handleChange}
                                />
                                {errors.hike_name && (
                                    <h2 className="errors">
                                        {errors.hike_name}
                                    </h2>
                                )}
                            </Form.Group>

                            <Form.Group controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    value={hike.location}
                                    onChange={handleChange}
                                />
                                {errors.location && (
                                    <h2 className="errors">
                                        {errors.location}
                                    </h2>
                                )}
                            </Form.Group>

                            <Form.Group controlId="distance">
                                <Form.Label>Distance</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="distance"
                                    value={hike.distance}
                                    onChange={handleChange}
                                />
                                {errors.distance && (
                                    <h2 className="errors">
                                        {errors.distance}
                                    </h2>
                                )}
                            </Form.Group>

                            <Form.Group controlId="difficulty">
                                <Form.Label>Difficulty</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="difficulty"
                                    value={hike.difficulty}
                                    onChange={handleChange}
                                >
                                    <option value="very easy">Very Easy</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                    <option value="very difficult">
                                        Very Difficult
                                    </option>
                                </Form.Control>
                                {errors.difficulty && (
                                    <h2 className="errors">
                                        {errors.difficulty}
                                    </h2>
                                )}
                            </Form.Group>

                            <Form.Group controlId="amenities">
                                <Form.Label>Amenities</Form.Label>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="bathroom"
                                        name="amenities"
                                        value="bathroom"
                                        checked={hike.amenities.includes(
                                            "bathroom"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="bathroom">Bathroom</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="water"
                                        name="amenities"
                                        value="water"
                                        checked={hike.amenities.includes(
                                            "water"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="water">Water</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="parking"
                                        name="amenities"
                                        value="parking"
                                        checked={hike.amenities.includes(
                                            "parking"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="parking">Parking</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="dogFriendly"
                                        name="amenities"
                                        value="dog-friendly"
                                        checked={hike.amenities.includes(
                                            "dog-friendly"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="dogFriendly">
                                        Dog-friendly
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="picnicAreas"
                                        name="amenities"
                                        value="picnic areas"
                                        checked={hike.amenities.includes(
                                            "picnic areas"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="picnicAreas">
                                        Picnic Areas
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="scenicViewpoints"
                                        name="amenities"
                                        value="scenic viewpoints"
                                        checked={hike.amenities.includes(
                                            "scenic viewpoints"
                                        )}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="scenicViewpoints">
                                        Scenic Viewpoints
                                    </label>
                                </div>
                                {errors.amenities && (
                                    <h2 className="errors">
                                        {errors.amenities}
                                    </h2>
                                )}
                            </Form.Group>

                            <Form.Group controlId="ratings">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="ratings"
                                    value={hike.ratings}
                                    onChange={handleChange}
                                />
                                {errors.ratings && (
                                    <h2 className="errors">{errors.ratings}</h2>
                                )}
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
                                {errors.description && (
                                    <h2 className="errors">
                                        {errors.description}
                                    </h2>
                                )}
                            </Form.Group>

                            <Button type="submit" variant="primary">
                                Update Hike
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HikeUpdate;
