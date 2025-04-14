import React from "react";
import PropertyCard from "./components/PropertyCard";

function App() {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0", minHeight: "100vh" }}>
      <PropertyCard
        id="house101"
        title="Elegant Family Home"
        location="Andhrapradesh,india"
        price={850000}
        area={1800}
        bedrooms={3}
        bathrooms={2}
        amenities={["parking", "pool", "gym"]}
        isAvailable={true}
        isVerified={true}
      >
        <button style={{ color: "#007bff", fontSize: "0.9rem", background: "none", border: "none", cursor: "pointer" }}>
          📅 Schedule Visit
        </button>
      </PropertyCard>
    </div>
  );
}

export default App;
