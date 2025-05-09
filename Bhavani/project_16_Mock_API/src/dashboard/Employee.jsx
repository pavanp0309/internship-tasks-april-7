import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    password: '',
    repassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  // Generate a random unique ID like "EMP1685930020123"
  const generateEmployeeId = () => {
    return 'EMP' + Date.now() + Math.floor(Math.random() * 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repassword) {
      alert("Passwords do not match.");
      return;
    }

    let newEmployeeId = generateEmployeeId();

    try {
      // Check for existing employeeId conflicts
      const existing = await axios.get('http://localhost:3000/employees');
      while (existing.data.some(emp => emp.employeeId === newEmployeeId)) {
        newEmployeeId = generateEmployeeId(); // regenerate if duplicate
      }

      const newEmployee = {
        name: formData.name,
        employeeId: newEmployeeId,
        company: formData.company,
        role: formData.role,
        password: formData.password
      };

      await axios.post('http://localhost:3000/employees', newEmployee);

      // Store in localStorage for session use
      localStorage.setItem('employeeId', newEmployeeId);
      localStorage.setItem('employeeDetails', JSON.stringify(newEmployee));

      alert(`Registration successful! Your ID: ${newEmployeeId}`);
      navigate('/employee');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving employee data.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src="./src/assets/Register.png" alt="Register" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">Employee Registration</h2>
          <form onSubmit={handleSubmit}>
            {['name', 'company', 'role', 'password', 'repassword'].map(field => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {field === 'repassword' ? 'Re-enter Password' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes('password') ? 'password' : 'text'}
                  className="form-control"
                  id={field}
                  placeholder={`Enter ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employee;
