import React from "react";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <>
            <div className="full_screen_background">
                <TopBanner />
                <div className="container mt-5">
                    <h1 className="mb-4">Hike Explorer</h1>
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

export default HomePage;
