import React from 'react'
import Navbar from './componenets/Navbar'
import Card from './componenets/Card'
import Orderdata from './data/data'

const App = () => {
  return (
    <>
    <div className='container'>
    <div className="container d-flex justify-content-between">
            <div className="header-right">
                <h4>Hello,Mr.Delivery Partner</h4>
            </div>
            <div className="header-left">
                <h5>Sambasivarao.B</h5>
                <h5>1234567899</h5>
            </div>
        </div>
      
     <div className="row">
     {
        Orderdata.map((ele)=>(
          <Card key={ele.OrderID} data={ele}/>
        ))
      }
     </div>
     
    </div>
    </>
  )
}

export default App
