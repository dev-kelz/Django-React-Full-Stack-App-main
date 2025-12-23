import Form from "../components/Form"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"

function Login() {
    const navigate = useNavigate();
    
    return (
        <div className="login-container">
            <Form route="/api/token/" method="login" />
            <div className="signup-prompt">
                Don't have an account?{' '}
                <button 
                    className="signup-button"
                    onClick={() => navigate('/register')}
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Login