import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ACCESS_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

function ProtectedRoute({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        setIsAuthorized(!!token);
    }, []);

    if (isAuthorized === null) {
        return <LoadingIndicator />;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
