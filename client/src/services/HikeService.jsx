import axios from "axios";

// create base URL
const http = axios.create({
    baseURL: import.meta.env.VITE_URL,
});

// get all hikes
async function getAllHikes() {
    return http
        .get("/hike")
        .then((response) => response.data)
        .catch((err) => {
            throw err;
        });
}

// create new hike
async function createHike(newHike) {
    return http
        .post("/hike/add_hike", newHike)
        .then((response) => response.data)
        .catch((err) => {
            throw err.response.data.errors;
        });
}

// get a hike by Id
async function getHikeById(id) {
    return http
        .get(`/hike/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw err;
        });
}

// update a hike by Id
async function updateHikeById(id, updates) {
    return http
        .put(`/hike/${id}`, updates)
        .then((response) => response.data)
        .catch((err) => {
            throw err.response.data.errors;
        });
}

// delete hike by Id
async function deleteHikeById(id) {
    return http
        .delete(`/hike/${id}`)
        .then((response) => response.data)
        .catch((err) => {
            throw err.response.data.errors;
        });
}

export { getAllHikes, createHike, getHikeById, updateHikeById, deleteHikeById };
