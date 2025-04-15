
import React from 'react'

const Card = ({data}) => {
    const {OrderID,CustomerName,ItemsOrdered,icon,cost,DeliveryAddrress,PaymentStatus,PaymentLable,CurrentDeliveryStatus,Gender,numberOfItems,prefer,color}=data
    const totalCost = cost.reduce((sum, val) => sum + Number(val), 0);

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-3">
        <h1>{prefer}</h1>
        <div className="card p-3" style={{background:`${color}`}}>
        <div className="profile">
        <h4 className='Orderid'>{OrderID}</h4>
        <h5 className='CustomerName'>{CustomerName}</h5>
        <p className='gender'>{Gender} <span><i className={`bi ${icon} text-dark`}></i></span></p>
        </div>
        <p className='number'><b>{numberOfItems}</b></p>
        <p><strong>Items:</strong> {ItemsOrdered.join(', ')}</p>
        <p><strong>Cost:</strong> {cost.join(', ')}</p>
        <p className='number'><b>{PaymentStatus?"✅ PAID":"❌ COD"}</b></p>
        <p className='number'>{PaymentLable?"NA":"💰 take"}</p>
        <p><strong>Total Cost:</strong> ₹{totalCost}</p>
        <p className='number'>{CurrentDeliveryStatus}</p>
        <p className='number'>{DeliveryAddrress}</p>
        </div>
      </div>

    </>
  )
}

export default Card
