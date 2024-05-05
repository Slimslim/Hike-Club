import React from "react";

const LoginTopBanner = (props) => {
    const { loggedUser } = props;

    return (
        <>
            <div className="banner">
                <div className="logo_container">
                    <h1 className="logo_text">
                        <div className="logo_line">
                            &nbsp;&nbsp;The Hike&nbsp;&nbsp;
                        </div>
                        <div>Club</div>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default LoginTopBanner;
