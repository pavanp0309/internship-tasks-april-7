import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import empropic from '/src/assets/empropic.jpg';

const EmployerProfile = () => {
  const [employers, setEmployers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    employeId: '',
    email: '',
    employeeCompany: '',
    employeeRole: '',
    password: ''
  });

  const navigate = useNavigate();
  const employerName = localStorage.getItem('employerName');
  const employerId = localStorage.getItem('employerId');

  useEffect(() => {
    // Redirect if the employer is not logged in
    const isLoggedIn = localStorage.getItem('isEmLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/employerlogin');  // Redirect to login if not logged in
    }

    // Fetch employers data
    fetch('http://localhost:3000/employers')
      .then(res => res.json())
      .then(data => setEmployers(data))
      .catch(err => console.error('Error fetching employers:', err));
  }, [navigate]);

  const handleEdit = (emp) => {
    setEditingId(emp.id);
    setFormData({
      name: emp.name,
      employeId: emp.employeId,
      email: emp.email,
      employeeCompany: emp.employeeCompany,
      employeeRole: emp.employeeRole,
      password: emp.password
    });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/employers/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData })
      });
      if (res.ok) {
        const updated = employers.map(emp =>
          emp.id === id ? { id, ...formData } : emp
        );
        setEmployers(updated);
        setEditingId(null);
        alert('Employer updated successfully!');
      }
    } catch (err) {
      console.error('Error updating employer:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employer?')) {
      try {
        await fetch(`http://localhost:3000/employers/${id}`, {
          method: 'DELETE',
        });
        setEmployers(prev => prev.filter(emp => emp.id !== id));
      } catch (err) {
        console.error('Error deleting employer:', err);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center mb-4">
        <img
          src={empropic}
          alt="Employer"
          className="rounded-circle me-3"
          width="60"
          height="60"
          style={{ objectFit: 'cover' }}
        />
        <h3 className="mb-0">{employerName || 'Employer'}</h3>
      </div>

      {employers.filter(emp => emp.id === employerId).map(emp => (
        <div key={emp.id} className="card mb-3">
          <div className="card-body">
            {editingId === emp.id ? (
              <>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  name="employeId"
                  value={formData.employeId}
                  onChange={handleChange}
                  placeholder="Employee ID"
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  name="employeeCompany"
                  value={formData.employeeCompany}
                  onChange={handleChange}
                  placeholder="Company"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  name="employeeRole"
                  value={formData.employeeRole}
                  onChange={handleChange}
                  placeholder="Role"
                />
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button className="btn btn-success me-2" onClick={() => handleSave(emp.id)}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h5 className="card-title">{emp.name}</h5>
                <p className="card-text"><strong>ID:</strong> {emp.employeId}</p>
                <p className="card-text"><strong>Email:</strong> {emp.email}</p>
                <p className="card-text"><strong>Company:</strong> {emp.employeeCompany}</p>
                <p className="card-text"><strong>Role:</strong> {emp.employeeRole}</p>
                <p className="card-text"><strong>Password:</strong> {emp.password}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary" onClick={() => handleEdit(emp)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button>
                  <button className="btn btn-secondary" onClick={() => window.history.back()}>
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployerProfile;
