import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const employee = JSON.parse(localStorage.getItem('employeeDetails'));
  const [employeeData, setEmployeeData] = useState(employee || {});
  const [companyId, setCompanyId] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get('http://localhost:3000/employees');
        const data = res.data.find(emp => emp.employeeId === employee.employeeId);
        if (data) {
          setEmployeeData(data);
          setCompanyId(data.company);
        }
      } catch (err) {
        console.error('Error fetching employee data:', err);
      }
    };
    fetchDetails();
  }, [employee.employeeId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:3000/employees/${employeeData.id}`, employeeData);
      localStorage.setItem('employeeDetails', JSON.stringify(employeeData));
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  const handleBack = () => {
    navigate('/employee');
  };

  return (
    <div className="card p-4 position-relative  text-center">
      <h2 className="mb-4 text-uppercase text-danger">Employee Profile</h2>

      <div className="text-center mb-4">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          className="rounded-circle"
          width={100}
          height={100}
          alt="avatar"
        />
      </div>

      {isEditing ? (
        <>
          <div className="mb-3">
            <label>Name</label>
            <input className="form-control" name="name" value={employeeData.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Role</label>
            <input className="form-control" name="role" value={employeeData.role} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={employeeData.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Company ID</label>
            <input className="form-control" value={companyId} disabled />
          </div>
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        </>
        
      ) : (
        <>
          <p><strong>Name:</strong> {employeeData.name}</p>
          <p><strong>Employee ID:</strong> {employeeData.employeeId}</p>
          <p><strong>Company ID:</strong> {companyId}</p>
          <p><strong>Role:</strong> {employeeData.role}</p>
          <p><strong>Password:</strong>{employeeData.password}</p>
          <div className='d-flex justify-content-center gap-4 p-4'>
          <button className="btn btn-outline-warning" onClick={() => setIsEditing(true)}>✍🏻Edit</button>
          <span>
          <button className="btn btn-outline-danger" onClick={handleBack}>
            ← Back
          </button>
          </span>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeProfile;
