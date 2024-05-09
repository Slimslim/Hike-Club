import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// imports for userContext
import { userContext } from "../context/userContext";
import { getUserById } from "../services/LoginService";
import { getAllHikes } from "../services/HikeService";

const HomePage = () => {
    // Variables to get logged in username
    const { user, setUser } = useContext(userContext);
    const id = window.localStorage.getItem("UUID");
    const [erros, setErrors] = useState({});

    // useState for the hike list
    const [hikes, setHikes] = useState([]);

    // Get user username information
    useEffect(() => {
        getUserById(id)
            .then((res) => {
                console.log(res);
                setUser(res);
            })
            .catch((err) => {
                setErrors(err);
            });

        getAllHikes()
            .then((res) => {
                console.log(res);
                setHikes(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/v1/hike/${id}`)
            .then((res) => {
                console.log(res);
                const remainingHikes = hikes.filter((hike) => hike._id !== id);
                setHikes(remainingHikes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="full_screen_background">
                <TopBanner loggedUser={user.username} />
                <div className="container mt-5">
                    <div className="card p-4 bg-light bg-opacity-50">
                        <h1 className="headersLabels">All Hikes</h1>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th scope="col">Hike Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Distance</th>
                                    <th scope="col">Difficulty</th>
                                    <th scope="col">Amenities</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hikes.map((hike) => (
                                    <tr key={hike._id}>
                                        <td>
                                            <Link to={`/hike/${hike._id}`}>
                                                {hike.hike_name}
                                            </Link>
                                        </td>
                                        <td>{hike.location}</td>
                                        <td>{hike.distance} Miles</td>
                                        <td>{hike.difficulty}</td>
                                        <td>
                                            {Array.isArray(hike.amenities)
                                                ? hike.amenities.join(", ")
                                                : hike.amenities}
                                        </td>
                                        <td>{hike.ratings}</td>
                                        <td>
                                            {hike.description.slice(0, 25) +
                                                "..."}
                                        </td>

                                        {user.username === hike.createBy ? (
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        handleDelete(hike._id)
                                                    }
                                                    variant="danger"
                                                >
                                                    Delete
                                                </Button>
                                                <Link
                                                    to={`/updatehike/${hike._id}`}
                                                    className="btn btn-warning ms-2"
                                                >
                                                    Update
                                                </Link>
                                            </td>
                                        ) : (
                                            <td></td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
