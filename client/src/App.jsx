import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import HomePage from "./views/HomePage";
import HikeDetail from "./views/HikeDetail";
import HikeUpdate from "./views/HikeUpdate";
import HikeCreate from "./views/HikeCreate";
import DevPage from "./views/DevPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DevPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/hike/:id" element={<HikeDetail />} />
                <Route path="/UpdateHike/:id" element={<HikeUpdate />} />
                <Route path="/CreateHike" element={<HikeCreate />} />
            </Routes>
        </>
    );
}

export default App;
