import React from 'react';
 import { useNavigate } from 'react-router-dom';
 // import '../pages/Projects.css'; // Optional: If you want to add any page-specific styles
 
 function Projects() {
   const navigate = useNavigate();
   const dummyProjects = [
     { id: '101', name: 'Project Alpha' },
     { id: '102', name: 'Project Beta' }
   ];
 
   return (
     <div>
       <h2>Projects</h2>
       {dummyProjects.map((project) => (
         <div
           key={project.id}
           style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}
         >
           <h3>{project.name}</h3>
           <button
             className="primary"
             onClick={() => navigate(`/console/projects/${project.id}`)}
           >
             View
           </button>
         </div>
       ))}
     </div>
   );
 }
 
 export default Projects;