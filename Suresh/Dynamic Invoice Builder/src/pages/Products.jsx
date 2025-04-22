import React, { use } from 'react'
import '/src/pages/Products.css'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';



const Products = () => {

const navigate = useNavigate()

  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(320);
  const [name1, setName1] = useState('John Doe')
  const [name2, setName2] = useState('Lilly Smith')
  const [email, setEmail] = useState('john@gmail.com')
  const [email2, setEmail2] = useState('lilly@gmail.com')
  const [address, setAddress] = useState("xyz street, 123")
  const [address2, setAddress2] = useState("abc street, 456")
  const [phone, setPhone] = useState(1234567890)
  const [phone2, setPhone2] = useState(3216549870)
  const [business, setBusiness] = useState(4561237892)
  const [business2, setBusiness2] = useState(8521479630)
  const [invoice, setInvoice] = useState("INV001")
  const [date, setDate] = useState("21/04/2025")
  const [item, setItem] = useState("Barbie Doll")

  const handleItem = (e) => {
    setItem(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleInvoice = (e) => {
    setInvoice(e.target.value);
  }

  const handlebusiness = (e) => {
    setBusiness(e.target.value);
  }
  const handlebusiness2 = (e) => {
    setBusiness2(e.target.value);
  }

  const handlephone = (e) => {
    setPhone(e.target.value);
  }
  const handlephone2 = (e) => {
    setPhone2(e.target.value);
  }

  const handleaddress = (e) => {
    setAddress(e.target.value);
  }
  const handleaddress2 = (e) => {
    setAddress2(e.target.value);
  }

  const handlemail = (e) => {
    setEmail(e.target.value);
  }
  const handlemail2 = (e) => {
    setEmail2(e.target.value);
  }

  const handlename1 = (e) => {
    setName1(e.target.value);
  }
  const handlename2 = (e) => {
    setName2(e.target.value);
  }

  const handleIncrement = () => {
      setQuantity(quantity + 1);
  }
  const handleDecrease = () => {
      setQuantity(quantity - 1);
  }

  const handleRateChange = (e) => {
      setRate(e.target.value);
  }

  




  return (
    <>
    <div className="fullbody">
    <div className="containerone">
    <div className='divone'>
        <h1>Invoice</h1>
        <br /><br /><br />
        <h4>From</h4>
     <h5>Name: </h5> <input className="form-control form-control-lg" type="text" placeholder="Full Name" value={name1} onChange={handlename1}/>
     <h5>Email:</h5><input className="form-control" type="email" placeholder="name@gmail.com" value={email} onChange={handlemail}/>
     <h5>Address:</h5><input className="form-control form-control-sm" type="text" placeholder="Address" value={address} onChange={handleaddress}></input>
     <h5>Phone:</h5><input className="form-control form-control-sm" type="tel" placeholder="Phone No" value={phone} onChange={handlephone}></input>
     <h5>Business Number</h5><input className="form-control form-control-sm" type="tel" placeholder="Business Number" value={business} onChange={handlebusiness} ></input>
     <div>
        <br />
        <br />
        <br />
        <br />
    <h5>Invoice Number </h5> <input className="form-control row g-3 align-items-center my-2" type="text" defaultValue={"INV001"} value={invoice} onClick={handleInvoice}/>
    <h5>Date </h5> <input className="form-control row g-3 align-items-center my-2" type="text" defaultValue={'21/04/2025'} value={date} onClick={handleDate}/>
    </div>
    </div>
    <div className="divtwo">
    <h4>Bill To</h4>
    <h5>Name: </h5> <input className="form-control form-control-lg" type="text" placeholder="Full Name" value={name2} onClick={handlename2}/>
     <h5>Email:</h5><input className="form-control" type="email" placeholder="name@gmail.com" value={email2} onClick={handlemail2}/>
     <h5>Address:</h5><input className="form-control form-control-sm" type="text" placeholder="Address" value={address2} onClick={handleaddress2}></input>
     <h5>Phone:</h5><input className="form-control form-control-sm" type="tel" placeholder="Phone No" value={phone2} onClick={handlephone2}></input>
     <h5>Business Number:</h5><input className="form-control form-control-sm" type="tel" placeholder="Business Number" value={business2} onClick={handlebusiness2}></input>
    </div>
    </div>
    <div className="containertwo">
      <div className="desc-head">
        <p>Description</p><p>Rate</p><p className='quantity-desc'>Quantity</p><p>Amount</p>
        </div>
        <div className="desc-details">
        <input className="form-controldesc row g-3 align-items-center my-2" type="text" placeholder='item description' value={item} onChange={handleItem}/>
        <input className="form-controlrate row g-3 align-items-center my-2" type="text" placeholder='Rate' value={rate} onChange={handleRateChange}/>
        <button className="increase row g-3 align-items-center my-2 " type="text" placeholder='Quantity' onClick={handleDecrease}>-</button>
        <p className='actual-quantity'>{quantity}</p>
        <button className="decrease row g-3 align-items-center my-2 " type="text" placeholder='Quantity' onClick={handleIncrement}>+</button>
        <p className='form-controlrate' onClick={handleRateChange}>{rate*quantity}</p>        
        
        </div>
    </div>
    <button className='btn btn-warning' onClick={()=> navigate('add')}>Add</button>

    <button className='btn btn-primary' onClick={()=> navigate('Print')}>Print Invoice</button>
    <Outlet/>




    </div>
    
    </>
  )
}

export default Products
