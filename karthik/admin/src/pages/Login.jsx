import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import '../pages/Login.css'; // Import the CSS file for styling
 
 const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
 
   const handleLogin = (e) => {
     e.preventDefault();
     // Add real auth logic here
     if (email && password) {
       localStorage.setItem('isLoggedIn', true);
       navigate('/console'); // Redirect to intro page
     }
   };
 
   return (
     <div className="login-container">
       <div className="login-box">
         <h2>Login</h2>
         <form onSubmit={handleLogin}>
           <div className="input-group">
             <label>Email</label>
             <input
               type="email"
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
               required
             />
           </div>
           <div className="input-group">
             <label>Password</label>
             <input
               type="password"
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
               required
             />
           </div>
           <button className="login-button" type="submit">Login</button> {/* Added the class name */}
         </form>
       </div>
     </div>
   );
 };
 
 export default Login;