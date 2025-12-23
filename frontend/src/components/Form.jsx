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
            if (method === "login") {
                // Simulate successful login without database check
                const mockToken = btoa(JSON.stringify({ 
                    username,
                    timestamp: new Date().toISOString()
                }));
                
                localStorage.setItem(ACCESS_TOKEN, mockToken);
                localStorage.setItem(REFRESH_TOKEN, mockToken);
                navigate("/");
            } else {
                // For registration, just redirect to login
                navigate("/login");
            }
        } catch (error) {
            console.error("Authentication error:", error);
            alert("An error occurred during authentication");
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
        </form>
    );
}

export default Form