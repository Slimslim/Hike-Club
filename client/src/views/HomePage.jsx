import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getAllHikes } from "../services/HikeService";



const HomePage = () => {
    const [hikes, setHikes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9999/api/v1")
            .then((res) => {
                const hikesData = res.data;
                setHikes(hikesData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:9999/api/v1/${id}`)
            .then((res) => {
                console.log(res);
                const remainingHikes = hikes.filter(hike => hike._id !== id);
                setHikes(remainingHikes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="full_screen_background">
            <TopBanner />
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
                                    <td><Link to={`/hike/${hike._id}`}>{hike.hike_name}</Link></td>
                                    <td>{hike.location}</td>
                                    <td>{hike.distance} Miles</td>
                                    <td>{hike.difficulty}</td>
                                    <td>{Array.isArray(hike.amenities) ? hike.amenities.join(', ') : hike.amenities}</td>
                                    <td>{hike.rating}</td>
                                    <td>{hike.description}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(hike._id)} variant="danger">Delete</Button>
                                        <Link to={`/updatehike/${hike._id}`} className="btn btn-warning ms-2">Update</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
