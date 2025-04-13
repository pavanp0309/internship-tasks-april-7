import React from "react";

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Emotion-Based Music Recommendation</h3>
          <p>
            Built a system to suggest music based on facial emotions using CNN. Achieved 25% higher engagement.
          </p>
          <p className="tech-used">
            <span>Python</span>, <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>
          </p>
        </div>

        <div className="card">
          <h3>Indian Foods Static Website</h3>
          <p>
            Designed a static responsive website with homepage, menu, and contact sections.
          </p>
          <p className="tech-used">
            <span>HTML</span>, <span>CSS</span>
          </p>
        </div>

        <div className="card">
          <h3>E-commerce Website</h3>
          <p>
            Built a responsive E-commerce web app with product listings, cart features, and payment functionality during my internship at Social Prachar.
          </p>
          <p className="tech-used">
            <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>React</span>
          </p>
        </div>

        <div className="card">
          <h3>Movie Search App</h3>
          <p>
            Created a movie search application using TMDB API to fetch and display real-time movie data with search functionality.
          </p>
          <p className="tech-used">
            <span>React</span>, <span>JavaScript</span>, <span>TMDB API</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
