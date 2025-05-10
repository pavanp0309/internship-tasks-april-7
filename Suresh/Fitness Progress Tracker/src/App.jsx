import React from "react";
import MetricCard from "./components/MetricCard ";
import { metrics } from "./components/Data"; 
 
 function App() {
   return (
     <div className="app">
       <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark px-3">
         <span className="navbar-brand">🏋️‍♂️ Hello Suresh!</span>
 
         <div className="ms-auto d-flex align-items-center gap-3 text-white">
           <i className="bi bi-bell fs-5" role="button" title="Notifications"></i>
           <i className="bi bi-gear fs-5" role="button" title="Settings"></i>
 
           <div className="d-flex align-items-center">
             <i className="bi bi-person-circle fs-4 me-2" role="button" title="Profile"></i>
             <div className="text-end">
               <div className="fw-semibold">Suresh</div>
               <small className="text-white">sureshmandal7989@gmail.com</small>
             </div>
           </div>
         </div>
       </nav>
 
       <div className="container py-4">
         <h2 className="mb-4 text-white text-center">💪 Fitness Progress Tracker</h2>
         <div className="row g-3">
           {metrics.map((metric, i) => (
             <div className="col-md-4 col-lg-3" key={i}>
               <MetricCard {...metric} />
             </div>
           ))}
         </div>
       </div>
     </div>
   );
 }
 
 export default App;