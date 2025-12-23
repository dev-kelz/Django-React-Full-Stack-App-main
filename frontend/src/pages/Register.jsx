import Form from "../components/Form"
import { useNavigate } from "react-router-dom"
import "../styles/Register.css"

function Register() {
    const navigate = useNavigate();
    
    return (
        <div className="register-container">
            <Form route="/api/user/register/" method="register" />
            <div className="login-prompt">
                Already have an account?{' '}
                <button 
                    className="login-button"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Register