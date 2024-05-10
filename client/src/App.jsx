import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import HomePage from "./views/HomePage";
import HikeDetail from "./views/HikeDetail";
import HikeUpdate from "./views/HikeUpdate";
import HikeCreate from "./views/HikeCreate";
import MyHikes from "./views/MyHikes";
import DevPage from "./views/DevPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/hike/:id" element={<HikeDetail />} />
                <Route path="/updatehike/:id" element={<HikeUpdate />} />
                <Route path="/createhike" element={<HikeCreate />} />
                <Route path="/myhikes" element={<MyHikes />} />
            </Routes>
        </>
    );
}

export default App;
