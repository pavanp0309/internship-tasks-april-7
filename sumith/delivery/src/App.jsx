import React from "react";
import Card from "./components/Card";
import data from "./data/data";

const App = () => {
  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(135deg,rgb(144, 93, 112), #bbdefb)",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container" style={{ backgroundColor: "lavender", padding: "30px", borderRadius: "10px" }}>
        <h1 className="mb-5 text-center fw-bold text-dark">📦 Delivery Orders</h1>
        <div className="row g-4 justify-content-center">
          {data.map((order, index) => (
            <div className="col-md-4 col-sm-6 d-flex" key={index}>
              <Card order={order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
