import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Check if the user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      // Redirect the user to the saved redirect path or to "/jobs"
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/jobs";
      navigate(redirectPath);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Directly log the user in
    localStorage.setItem("isLoggedIn", "true");

    // Check if there's a redirect path saved in localStorage
    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/jobs";
    localStorage.removeItem("redirectAfterLogin"); // Clean up after use
    navigate(redirectPath); // Redirect to the saved page or home
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
