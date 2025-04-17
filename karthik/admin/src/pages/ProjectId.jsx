import React from 'react';
 import { useParams, useNavigate } from 'react-router-dom';
 // import '../pages/ProjectId.css'; // Optional: If you want to add specific styles
 
 function ProjectId() {
   const { projectId } = useParams();
   const navigate = useNavigate();
 
   return (
     <div>
       <h2>Project ID: {projectId}</h2>
       <button
         className="primary"
         onClick={() => navigate(`/console/projects/${projectId}/settings`)}
       >
         Go to Settings
       </button>
     </div>
   );
 }
 
 export default ProjectId;