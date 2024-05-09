import React from "react";
import HomePage from "./views/HomePage";
import HikeCreate from "./views/HikeCreate";
import HikeDetails from "./views/HikeDetail";
import HikeUpdate from "./views/HikeUpdate";
import DevPage from "./views/DevPage";
import MyHikes from "./views/MyHikes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/createhike" element={<HikeCreate/>} />
        <Route path="/hike/:id" element={<HikeDetails/>} />
        <Route path="/updatehike/:id" element={<HikeUpdate/>} />
        <Route path="/myhikes" element={<MyHikes />} />
        <Route path="/" element={<DevPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
