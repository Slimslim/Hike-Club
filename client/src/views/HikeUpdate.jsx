import React, { useState, useEffect, useContext } from "react";

// imports for userContext
import { userContext } from "../context/userContext";
import { getUserById } from "../services/LoginService";
import TopBanner from "../components/TopBanner";

const HikeUpdate = (props) => {
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
                <h1> HikeUpdate Page</h1>
            </div>
        </>
    );
};

export default HikeUpdate;
