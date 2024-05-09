import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// imports for userContext
import { userContext } from "../context/userContext";
import { getUserById } from "../services/LoginService";
import TopBanner from "../components/TopBanner";

const HikeDetails = () => {
    // Variables to get logged in username
    const { user, setUser } = useContext(userContext);
    const id = window.localStorage.getItem("UUID");

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
    }, []);

    return (
        <>
            <div className="full_screen_background">
                <TopBanner loggedUser={user.username} />
                <div className="container mt-5">
                    <h1 className="mb-4">Hike Details</h1>
                    <Link to="/">Go to Dev Page</Link>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Hike Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">Distance</th>
                                <th scope="col">Difficulty</th>
                                <th scope="col">Facilities</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Example Hike</td>
                                <td>Example Location</td>
                                <td>10 miles</td>
                                <td>Medium</td>
                                <td>Restrooms, Picnic Area</td>
                                <td>4.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default HikeDetails;
