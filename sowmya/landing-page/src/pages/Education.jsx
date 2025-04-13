import React from "react";

const Education = () => {
  return (
    <section className="section">
      <h2>Education</h2>
      <div className="card-grid">
        <div className="card">
          <h3>BTech (CSE)</h3>
          <p>PBR Visvodaya Institute of Technology and Science, Kavali</p>
          <p>2020 – 2024 | 83.3%</p>
        </div>
        <div className="card">
          <h3>MPC</h3>
          <p>Narayana Junior College, Kavali</p>
          <p>2017 – 2019 | 9.6 / 10 CGPA</p>
        </div>
        <div className="card">
          <h3>SSC</h3>
          <p>Narayana EM High School, Kavali</p>
          <p>2016 – 2017 | 9.0 / 10 CGPA</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
