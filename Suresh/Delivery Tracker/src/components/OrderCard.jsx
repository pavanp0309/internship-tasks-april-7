import React from 'react';

const statusSteps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];

const getPaymentBadge = (status) => {
    const badgeTypes = {
        Paid: <span className="badge bg-success">✅ Paid</span>,
        COD: <span className="badge bg-warning text-dark">💵 Cash On Delivery</span>,
        Failed: <span className="badge bg-danger">❌ Payment Failed</span>,
    };

    return badgeTypes[status] || null;
};

const OrderCard = ({ order }) => {
    const currentStep = statusSteps.indexOf(order.deliveryStatus);

    const renderItems = () =>
        order.items.map((item, index) => <li key={index}>{item}</li>);

    const renderProgressTracker = () =>
        statusSteps.map((step, idx) => (
            <div className="position-relative mx-1 flex-fill" key={step}>
                <div
                    className={`step-circle mx-auto ${
                        idx <= currentStep ? "bg-primary" : "bg-secondary"
                    }`}
                ></div>
                <small className="d-block mt-1">{step}</small>
                {idx < statusSteps.length - 1 && (
                    <div
                        className={`step-line ${
                            idx < currentStep ? "bg-primary" : "bg-light"
                        }`}
                    ></div>
                )}
            </div>
        ));

    const renderButtons = () => (
        <>
            {order.deliveryStatus === "Out for Delivery" && (
                <button className="btn btn-sm btn-primary">Track</button>
            )}
            {order.deliveryStatus === "Delivered" && (
                <button className="btn btn-sm btn-success">Rate Order</button>
            )}
            {order.paymentStatus === "Failed" && (
                <button className="btn btn-sm btn-danger">Retry Payment</button>
            )}
            <button className="btn btn-sm btn-outline-secondary">Support</button>
        </>
    );

    return (
        <div className="card order-card shadow-sm m-3 p-3">
            <div className="card-body d-flex flex-column justify-content-between h-100">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">Order {order.id}</h5>
                    <small className="text-muted">{order.customerName}</small>
                </div>

                {/* Items Ordered */}
                <div className="mb-2">
                    <p className="mb-1 fw-medium text-muted">Items Ordered:</p>
                    <ul className="mb-0 ps-3 small">{renderItems()}</ul>
                </div>

                {/* Address */}
                <p className="small">
                    <strong>Address:</strong> {order.address}
                </p>

                {/* Payment Status */}
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-semibold small">Payment:</span>
                    {getPaymentBadge(order.paymentStatus)}
                </div>

                {/* Progress Tracker */}
                <div className="progress-tracker d-flex justify-content-between text-center mb-3">
                    {renderProgressTracker()}
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-end gap-2 flex-wrap">
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
};

export default OrderCard;