// src/components/TransactionCard.jsx
const TransactionCard = ({ title, amount, type, date, status, category, icon, children }) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  
    const amountClass = type === 'credit' ? 'text-success' : 'text-danger';
    const statusClass = status === 'Success' ? 'badge bg-success' : status === 'Pending' ? 'badge bg-warning text-dark' : 'badge bg-danger';
  
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{title}</h5>
            <span className={`fw-bold ${amountClass}`}>{formattedAmount}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <small className="text-muted">{new Date(date).toLocaleDateString()}</small>
            <span className={statusClass}>{status}</span>
          </div>
          <div className="mt-2 d-flex align-items-center gap-2">
            <i className={icon}></i>
            <span className="badge bg-light text-dark border">{category}</span>
          </div>
          {children && <div className="mt-2 text-muted"><em>{children}</em></div>}
        </div>
      </div>
    );
  };
  
  export default TransactionCard;
  