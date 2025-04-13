import React from 'react';
import OrderCard from './components/OrderCard';
import Navbar from './components/Navbar';
 import dummyOrders from './data/Data';
 
 
 const App = () => (
   <div>
     <Navbar />
     <div className="container mt-4">
       <div className="row">
         {dummyOrders.map(order => (
           <div key={order.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
             <OrderCard order={order} />
           </div>
         ))}
       </div>
     </div>
   </div>
 );
 
 
 
 export default App;