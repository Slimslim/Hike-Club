import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

// imports for userContext
import { userContext } from "../context/userContext";
import { getUserById } from "../services/LoginService";
import { getAllHikes } from "../services/HikeService";

const MyHikes = (props) => {
    // Variables to get logged in username
    const { user, setUser } = useContext(userContext);
    const userId = window.localStorage.getItem("UUID");

    const [hikes, setHikes] = useState({});
    const navigate = useNavigate();

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

        getAllHikes()
            .then((res) => {
                console.log(res);
                setHikes(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                                {/* {hikes.map((hike) =>
                                    hike.createBy === user.username ? (
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
                                                            handleDelete(
                                                                hike._id
                                                            )
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
                                    ) : null
                                )} */}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyHikes;
