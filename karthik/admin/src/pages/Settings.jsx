import React from 'react';
 import { useParams } from 'react-router-dom';
 // import '../pages/Settings.css'; // Optional: If you want to add specific styles
 
 function Settings() {
   const { projectId } = useParams();
 
   return (
     <div>
       <h2>Settings for Project ID: {projectId}</h2>
       <label style={{ display: 'block', fontSize: '1rem', marginBottom: '10px' }}>
   Project Name:
   <input 
     type="text" 
     defaultValue={`Project ${projectId}`} 
     style={{ 
     //   padding: '8px', 
       fontSize: '1rem', 
       borderRadius: '2px', 
       border: '1px solid #ccc', 
       width: '100%' 
     }} 
   />
   </label>
       <button className="secondary">Save Changes</button>
     </div>
   );
 }
 
 export default Settings;