import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employeId: '',
    employeeCompany: '',
    employeeRole: '',
    password: '',
    rePassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleRegister = async () => {
    const { name, email, employeId, employeeCompany, employeeRole, password, rePassword } = formData;

    if (!name || !email || !employeId || !employeeCompany || !employeeRole || !password || !rePassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Check if email or employeeId already exists
      const res = await fetch(`http://localhost:3000/employers`);
      const employers = await res.json();

      const emailExists = employers.some(emp => emp.email === email);
      const idExists = employers.some(emp => emp.employeId === employeId);

      if (emailExists) {
        alert("An account with this email already exists.");
        return;
      }

      if (idExists) {
        alert("An account with this Employee ID already exists.");
        return;
      }

      const employer = { name, email, employeId, employeeCompany, employeeRole, password };

      const response = await fetch('http://localhost:3000/employers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employer)
      });

      if (response.ok) {
        alert('Registration successful!');
        setFormData({
          name: '',
          email: '',
          employeId: '',
          employeeCompany: '',
          employeeRole: '',
          password: '',
          rePassword: ''
        });
        navigate('/employerlogin');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Server error!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Employer Registration</h2>

        <input type="text" className="form-control mb-3" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" className="form-control mb-3" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" className="form-control mb-3" name="employeId" placeholder="Employee ID" value={formData.employeId} onChange={handleChange} />
        <input type="text" className="form-control mb-3" name="employeeCompany" placeholder="Company" value={formData.employeeCompany} onChange={handleChange} />
        <input type="text" className="form-control mb-3" name="employeeRole" placeholder="Role" value={formData.employeeRole} onChange={handleChange} />
        <input type="password" className="form-control mb-3" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="password" className="form-control mb-4" name="rePassword" placeholder="Re-enter Password" value={formData.rePassword} onChange={handleChange} />

        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default EmployerRegister;
