import React from 'react';
import { useParams } from 'react-router-dom';

const Settings = () => {
  const { projectId } = useParams();

  return (
    <div className='m-5'>
      <h2>Settings for Project ID: {projectId}</h2>
      <label className="form-label ">
        Project Name:
        <input
          className="form-control"
          type="text"
          defaultValue={`Project ${projectId}`}
        />
      </label>
      <br />
      <button className="btn btn-secondary m-2">Save Changes</button>
    </div>
  );
};

export default Settings;
