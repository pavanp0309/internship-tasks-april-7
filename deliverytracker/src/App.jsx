import React from "react";
import OrderList from "./components/OrderList";
import "./styles/App.css"
const App = () => {
  return (
    <>
      <div className="app" >
        <h1  style={{ textAlign: "center", color: "black", marginBottom: "2rem" }}>Delivery Order Tracker</h1>
        <OrderList />
      </div>
    </>
  );
};

export default App;
