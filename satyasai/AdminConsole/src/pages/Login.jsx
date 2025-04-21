import React from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here you can add dummy auth if needed
    navigate('/console');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1650&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <div
        className="p-5 rounded shadow-lg text-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '350px' }}
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="mb-4">Welcome Back</h2>
        <p>This is your admin login portal.</p>
        <p>Please contact admin to proceed.</p>

        <button className="btn btn-primary mt-3 w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
