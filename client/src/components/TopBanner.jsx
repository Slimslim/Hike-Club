import React from "react";
import { Link } from "react-router-dom";
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
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            to={"/createhike"}
                        >
                            Create Hike
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
                            to={"/myhikes"}
                        >
                            My hikes
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            to={"/"}
                        >
                            Dev Page
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            className="nav-link active px-1"
                            aria-current="page"
                            to={"/updatehike/:id"}
                        >
                            Update Hike
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
                </nav>
            </div>
        </>
    );
};

export default TopBanner;
