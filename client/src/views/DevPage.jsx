import { Link } from "react-router-dom";

const DevPage = (props) => {
    return (
        <>
            <h1> Dev Page with access to other pages</h1>

            <Link to={"/login"}>Login Page</Link>
            <h1></h1>
            <Link to={"/home"}>Home Page</Link>
            <h1></h1>
            <Link to={"/hike/:id"}>Hike Detail Page</Link>
            <h1></h1>
            <Link to={"/updatehike/:id"}>Update Hike Page</Link> {/* Add this line */}
            <h1></h1>
            <Link to={"/createhike"}>Create Hike Page</Link>
        </>
    );
};

export default DevPage;
