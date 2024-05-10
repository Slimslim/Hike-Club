import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import TopBanner from "../components/TopBanner";

const HikeDetails = () => {
    const [hike, setHike] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

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

    return (
        <div className="full_screen_background">
            <TopBanner />
            <div className="container mt-5">
                <div className="card p-4 bg-light bg-opacity-50">
                  <h1 className="headersLabels">{hike.hike_name}</h1>
                    <table className="table table-bordered">
                        
                        <thead className="thead-dark">
                            <tr>

                                <th>Hike Name</th>
                                <th>Location</th>
                                <th>Distance</th>
                                <th>Difficulty</th>
                                <th>Amenities</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{hike.hike_name}</td>
                                <td>{hike.location}</td>
                                <td>{hike.distance}</td>
                                <td>{hike.difficulty}</td>
                                <td>
                                    {Array.isArray(hike.amenities)
                                        ? hike.amenities.join(", ")
                                        : hike.amenities}
                                </td>
                                <td>{hike.description}</td>
                                <td>
                                    <Link
                                        to={`/updatehike/${hike._id}`}
                                        className="btn btn-warning ms-2"
                                    >
                                        Update
                                    </Link>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HikeDetails;
