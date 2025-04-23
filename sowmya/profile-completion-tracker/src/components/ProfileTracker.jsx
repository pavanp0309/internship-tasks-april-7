import React, { useState } from 'react';

const ProfileTracker = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fieldsCompleted = [name, bio, photo].filter(Boolean).length;
  const progress = Math.round((fieldsCompleted / 3) * 100);
  const isComplete = progress === 100;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (isComplete) {
      setSubmitted(true);
    }
  };

  return (
    <div className="card shadow-sm p-4">
      <div className="card-body">
        <h3 className="mb-4 text-center">🚀 Complete Your Freelancer Profile</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Full Name</label>
            <input
              id="nameInput"
              type="text"
              className="form-control"
              value={name}
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bioInput" className="form-label">Short Bio</label>
            <textarea
              id="bioInput"
              className="form-control"
              value={bio}
              rows="3"
              placeholder="Describe your background or services"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="photoInput" className="form-label">Profile Photo</label>
            <input
              id="photoInput"
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewUrl && (
              <div className="mt-2">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="rounded-circle"
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>

          <div className="mt-3">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          </div>

          {!isComplete && (
            <div className="alert alert-warning mt-3">
              ⚠️ Please complete all sections to submit.
            </div>
          )}

          {submitted && (
            <div className="alert alert-success mt-3">
              🎉 Profile Published Successfully!
            </div>
          )}

          <button
            type="button"
            className="btn btn-primary mt-3"
            disabled={!isComplete}
            onClick={handleSubmit}
          >
            Publish Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileTracker;
