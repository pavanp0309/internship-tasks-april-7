import React from "react";
import InvoiceCard from "./components/InvoiceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import invoiceData from "./data"; 

const App = () => {
 
  const searchInvoices = (searchTerm) => {
    return invoiceData.filter((invoice) =>
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  
  const filterByStatus = (status) => {
    return invoiceData.filter((invoice) => invoice.status === status);
  };

 
  const sortInvoices = (invoices, sortBy) => {
    return invoices.sort((a, b) => {
      if (sortBy === "invoiceNumber") {
        return a.invoiceNumber.localeCompare(b.invoiceNumber);
      } else if (sortBy === "amount") {
        return a.amount - b.amount;
      } else if (sortBy === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0;
    });
  };

 
  const itemCount = invoiceData.length;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Invoice Dashboard</h2>

      {/* Item count */}
      <p><strong>Total Invoices: </strong>{itemCount}</p>

      {/* Search Bar */}
      <SearchBar onSearch={searchInvoices} />

      {/* Status Filter */}
      <StatusFilter onFilter={filterByStatus} />

      {/* Sorting */}
      <SortInvoices onSort={sortInvoices} invoiceData={invoiceData} />

      {/* Displaying invoices */}
      <div className="row">
        {invoiceData.map((invoice) => (
          <div key={invoice.id} className="col-md-6 col-lg-4 mb-4">
            <InvoiceCard {...invoice}>
              <button className="btn btn-sm btn-outline-primary mt-2">
                Download PDF
              </button>
            </InvoiceCard>
          </div>
        ))}
      </div>
    </div>
  );
};


const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search by Client Name"
        onChange={(e) => {
          const searchResults = onSearch(e.target.value);
          console.log(searchResults); 
        }}
        className="form-control"
      />
    </div>
  );
};

const StatusFilter = ({ onFilter }) => {
  return (
    <div className="mb-3">
      <select
        onChange={(e) => {
          const filteredInvoices = onFilter(e.target.value);
          console.log(filteredInvoices); 
        }}
        className="form-control"
      >
        <option value="">Filter by Status</option>
        <option value="Paid">Paid</option>
        <option value="Overdue">Overdue</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

const SortInvoices = ({ onSort, invoiceData }) => {
  return (
    <div className="mb-3">
      <select
        onChange={(e) => {
          const sortedInvoices = onSort(invoiceData, e.target.value);
          console.log(sortedInvoices); 
        }}
        className="form-control"
      >
        <option value="amount">Sort by Amount</option>
        <option value="invoiceNumber">Sort by Invoice Number</option>
        <option value="dueDate">Sort by Due Date</option>
      </select>
    </div>
  );
};

export default App;
