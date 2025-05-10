import React from 'react'
 import Activity from '../pages/Activity'
 import Billing from '../pages/Billing'
 import Console from '../pages/Console'
 import Projects from '../pages/Projects'
 import pageNotFound from './pages/pageNotFound'
 import Settings from '../pages/Settings'
 import ProjectId from '../pages/ProjectId'
 import { NavLink } from 'react-router-dom'
 const Navbar = () => {
   return (
     <div class="d-flex align-items-start">
     <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
       <NavLink to={"/console"}>Console</NavLink>
       <NavLink to={"/projects"}>Projects</NavLink>
       <NavLink to={"/billing"}>Billing</NavLink>
       <NavLink to={"/activity"}>Activity</NavLink>
     </div>
     </div>
   )
 }
 
 export default Navbar