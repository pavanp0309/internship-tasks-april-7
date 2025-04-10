import React from "react";
import InvoiceCard from "./components/InvoiceCard";
import invoices from "./data/data.js";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    
    <div className="container py-4">
      <h1 className="text-center mb-4 fw-bold">Invoice Listings</h1>
      <Navbar/>
      

      <div className="row">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="col-12 col-sm-6 col-md-6 col-lg-4 my-4 d-flex">
            <div className="w-100 h-100">
              <InvoiceCard {...invoice}>
                <button className="btn btn-dark w-100 mt-auto">Download PDF</button>
              </InvoiceCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
