import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Home.css";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove tokens + any stored user info
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    // if any other keys are used they can be removed here too
    // navigates back to login
    navigate('/login', { replace: true });
  };

  return (
    <div className="logout-wrapper">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
