import { Link } from "react-router-dom"
import "../styles/NotFound.css"

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="error-code">
                    <span className="code-4">4</span>
                    <div className="astronaut">
                        <div className="helmet"></div>
                        <div className="body"></div>
                        <div className="arm-left"></div>
                        <div className="arm-right"></div>
                        <div className="leg-left"></div>
                        <div className="leg-right"></div>
                    </div>
                    <span className="code-4">4</span>
                </div>
                
                <h1 className="error-title">Lost in Space</h1>
                <p className="error-message">
                    Oops! The page you're looking for seems to have floated away into the digital cosmos.
                </p>
                
                <div className="navigation-buttons">
                    <Link to="/" className="primary-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9,22 9,12 15,12 15,22"></polyline>
                        </svg>
                        Go Home
                    </Link>
                    <Link to="/login" className="secondary-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10,17 15,12 10,7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Login
                    </Link>
                </div>
                
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
            </div>
        </div>
    )
}

export default NotFound