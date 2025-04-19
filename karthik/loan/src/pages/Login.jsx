import React from 'react';
 import { useNavigate } from 'react-router-dom';
 
 function Login() {
   const navigate = useNavigate();
 
   const handleLogin = (e) => {
     e.preventDefault();
     localStorage.setItem('isLoggedIn', 'true');
     navigate('/dashboard');
   };
 
   return (
     <div className="container mt-5">
       <h2>Login</h2>
       <form onSubmit={handleLogin}>
         <input type="text" className="form-control mb-3" placeholder="Username" required />
         <input type="password" className="form-control mb-3" placeholder="Password" required />
         <button className="btn btn-primary w-100">Login</button>
       </form>
     </div>
   );
 }
 
 export default Login;