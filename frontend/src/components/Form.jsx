import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await api.post(route, { username, password });

        if (method === "login") {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } else {
            navigate("/login");
        }
    } catch (error) {
        // Check if server responded
        if (error.response) {
            if (error.response.status === 401) {
                alert("Invalid username or password. Please try again.");
            } else {
                alert(`Error: ${error.response.status} - ${error.response.statusText}`);
            }
        } else if (error.request) {
            // Request was made but no response
            alert("Network error. Please check your connection.");
        } else {
            // Something else
            alert("An unexpected error occurred.");
        }
    } finally {
        setLoading(false);
    }
};

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
            <p className="form-footer">
                {method === "login" ? (
                    <>
                        Don't have an account? <a href="/register" className="form-link">Register here</a>
                    </>
                ) : (
                    <>
                        Already have an account? <a href="/login" className="form-link">Login here</a>
                    </>
                )}
            </p>
        </form>
    );
}

export default Form