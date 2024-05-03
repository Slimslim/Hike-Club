import React, { useState, useContext } from "react";
import { login, register } from "../services/LoginService";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { userContext } from "../context/userContext";

import TopBanner from "../components/TopBanner";

const Login = (props) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [regUserInfo, setRegUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});

    const registerSubmnitHandler = (e) => {
        e.preventDefault();
        console.log("Registering");

        register(regUserInfo)
            .then((res) => {
                // setUser(res);
                console.log("Registered!!!");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            });
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        console.log("logging in");

        login(userInfo)
            .then((res) => {
                console.log("Login user data: ", res);
                // setUser(res);
                // storeIdInLocalStorage(res._id);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            });
    };

    return (
        <>
            <div className="full_screen_background">
                <TopBanner />
                <div className="form_container">
                    <div className="register_container">
                        <form onSubmit={registerSubmnitHandler}>
                            <div className="form-group mb-2">
                                <div className="d-flex gap-3">
                                    <label>Username</label>
                                    <input
                                        className={
                                            errors.username
                                                ? "form-control border-2 border-danger"
                                                : "form-control"
                                        }
                                        type="username"
                                        name="username"
                                        onChange={(e) =>
                                            setRegUserInfo({
                                                ...userInfo,
                                                username: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                {errors.username ? (
                                    <p className="text-danger">
                                        {errors.username.message}
                                    </p>
                                ) : null}
                            </div>
                            <div className="form-group mb-2 ">
                                <div className="d-flex gap-3">
                                    <label>Email</label>
                                    <input
                                        className={
                                            errors.email
                                                ? "form-control border-2 border-danger"
                                                : "form-control"
                                        }
                                        type="email"
                                        name="email"
                                        onChange={(e) =>
                                            setRegUserInfo({
                                                ...userInfo,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                {errors.email ? (
                                    <p className="text-danger">
                                        {errors.email.message}
                                    </p>
                                ) : null}
                            </div>
                            <div className="form-group mb-2">
                                <div className="d-flex gap-3">
                                    <label>Password</label>
                                    <input
                                        className={
                                            errors.password
                                                ? "form-control border-2 border-danger"
                                                : "form-control"
                                        }
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setRegUserInfo({
                                                ...userInfo,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                {errors.password ? (
                                    <p className="text-danger">
                                        {errors.password.message}
                                    </p>
                                ) : null}
                            </div>
                            <div className="form-group mb-2">
                                <div className="d-flex gap-3">
                                    <label>Confirm Password</label>
                                    <input
                                        className={
                                            errors.confirmPassword
                                                ? "form-control border-2 border-danger"
                                                : "form-control"
                                        }
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setRegUserInfo({
                                                ...userInfo,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                {errors.confirmPassword ? (
                                    <p className="text-danger">
                                        {errors.confirmPassword.message}
                                    </p>
                                ) : null}
                            </div>
                            <button className="btn btn-light border border-dark">
                                Sign up
                            </button>
                        </form>
                    </div>
                    <div className="login_container">
                        <form
                            onSubmit={loginSubmitHandler}
                            className={
                                errors.message
                                    ? "user_login_container  error_form"
                                    : "user_login_container"
                            }
                        >
                            <div className="email_container">
                                <label className="login_labels">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) =>
                                        setUserInfo({
                                            ...userInfo,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="password_container">
                                <label className="login_labels">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) =>
                                        setUserInfo({
                                            ...userInfo,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button className="btn btn-light border border-dark">
                                Login
                            </button>
                            <p></p>
                            <p className="login_labels">
                                Don't have an account yet ?
                                <Link to={"/register"}>Sing up here</Link>
                            </p>
                            <div className="error_message_login">
                                <p className="text-danger text-center">
                                    {errors ? errors.message : null}
                                </p>
                                {/* {errors ? <p className="text-danger">{errors}</p> : null} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
