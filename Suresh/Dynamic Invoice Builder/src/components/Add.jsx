import React from 'react'

const Add = () => {
  return (
    <div>
       <div className="desc-details">
        <input className="form-controldesc row g-3 align-items-center my-2" type="text" placeholder='item description' onChange={handleItem}/>
        <input className="form-controlrate row g-3 align-items-center my-2" type="text" placeholder='Rate' onChange={handleRateChange}/>
        <button className="increase row g-3 align-items-center my-2 " type="text" placeholder='Quantity' onClick={handleDecrease}>-</button>
        <p className='actual-quantity'>{quantity}</p>
        <button className="decrease row g-3 align-items-center my-2 " type="text" placeholder='Quantity' onClick={handleIncrement}>+</button>
        <p className='form-controlrate' onClick={handleRateChange}>{rate*quantity}</p>        
        
        </div>
    </div>
  )
}

export default Add
