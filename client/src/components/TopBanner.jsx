import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const TopBanner = (props) => {
    const { loggedUser } = props;

    return (
        <>
            <div className="banner">
                <nav className="left_nav">
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            // to={"/myplaylists"}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            to={"/home"}
                        >
                            Home
                        </Link>
                    </li>
                </nav>

                <div className="logo_container">
                    <h1 className="logo_text">
                        <div className="logo_line">The Hike</div>
                        <div>Club</div>
                    </h1>
                </div>
                <nav className="right_nav">
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            // to={"/myplaylists"}
                        >
                            My hikes
                        </Link>
                    </li>

                    <NavDropdown
                        title={loggedUser}
                        id="nav-dropdown-dark-example"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item
                            href="/"
                            onClick={() => logoutHandler()}
                        >
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>

                    {/* <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            to={"/"}
                            onClick={() => logoutHandler()}
                        >
                            <u>logout</u>
                        </Link>
                        <a
                            className="nav-link  px-1 disabled"
                            href="#"
                            aria-disabled="true"
                        >
                            Logged as {loggedUser}
                        </a>
                        <i className="bi bi-person-circle"></i>
                    </li> */}
                </nav>
            </div>
        </>
    );
};

export default TopBanner;
