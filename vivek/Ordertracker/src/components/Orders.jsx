import React from 'react';

const Orders = ({ order }) => {
    const payment = (paymentstatus) => {
        switch(paymentstatus){
            case 'paid': return <span className="payment paid">✅ Paid</span>;
            case 'cod': return <span className="payment cod">💵 COD</span>;
            default: return <span className="payment failed">❌ Failed</span>;    
        }
    }

    const statusIcon = (status) => {
        switch(status.toLowerCase()) {
            case 'delivered': return '✓';
            case 'shipped': return '✈';
            case 'placed': return '⏳';
            case 'out for delivery': return '🚚';
            default: return '';
        }
    }

    return (
        <div className="order-card">
            <div className="order-header">
                <h3 className="order-id">Order ID: {order.id}</h3>
                <div className="order-meta">
                    {payment(order.payment)}
                    <span className={`status ${order.status}`}>
                        {statusIcon(order.status)} {order.status}
                    </span>
                </div>
            </div>
            
            <div className="order-body">
                <h4 className="customer-name">Customer: {order.name}</h4>
                
                <div className="order-items">
                    <h5>Items:</h5>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                
                <p className="delivery-address">
                    <span className="address-icon">📍</span> 
                    {order.address}
                </p>
            </div>
        </div>
    );
};

export default Orders;