import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // Token invalid or expired
          localStorage.removeItem("token");
          navigate("/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      {user ? (
        <div className="user-info">
          <p>
            Welcome back, <strong>{user.name}</strong>!
          </p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
