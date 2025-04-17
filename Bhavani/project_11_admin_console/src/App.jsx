import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Console from './pages/Console'
import Project from './pages/Project'
import Activity from './pages/Activity'
import Billing from './pages/Billing'
import ProjectDetails from './pages/ProjectDetails'
import Setting from './pages/Setting'
import PageNotFound from './pages/PageNotFound'
import PrivateRoute from './pages/PrivateRoute'


const App = () => {
  return (
  <>
  <Routes>
    <Route path='/login' element={< Login/>}/>

    {/* Protected Console Routes */}
    <Route path="/console" element={<PrivateRoute />}>
  <Route index element={<Console />} />
  <Route path="project" element={<Project />} />
  <Route path="project/:id" element={<ProjectDetails />} />
  <Route path="project/:id/setting" element={<Setting />} />
  <Route path="activity" element={<Activity />} />
  <Route path="billing" element={<Billing />} />
</Route>


       {/* Catch-All 404 */}
       <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
  )
}

export default App
