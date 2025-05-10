import React, { useState, useEffect } from "react";
import "./ProfileTracker.css";

function ProfileTracker() {
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    photo: null,
  });

  const [completion, setCompletion] = useState(0);

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const calculateCompletion = () => {
    let completed = 0;
    if (profile.name.trim()) completed += 1;
    if (profile.bio.trim()) completed += 1;
    if (profile.photo) completed += 1;
    return (completed / 3) * 100;
  };

  useEffect(() => {
    setCompletion(calculateCompletion());
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Profile submitted!");
  };

  return (
    <div className="profile-tracker">
      <h2>👤 Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-section">
          <label>Bio</label>
          <textarea
            value={profile.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            placeholder="Write a short bio"
          ></textarea>
        </div>

        <div className="form-section">
          <label>Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange("photo", e.target.files[0])}
          />
          {profile.photo && (
            <img
              src={URL.createObjectURL(profile.photo)}
              alt="preview"
              className="photo-preview"
            />
          )}
        </div>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
          <p>{completion}% completed</p>
        </div>

        <button type="submit" disabled={completion < 100}>
          Submit Profile
        </button>

        {completion < 100 && (
          <p className="warning">⚠️ Complete all fields to enable submit</p>
        )}
      </form>
    </div>
  );
}

export default ProfileTracker;
