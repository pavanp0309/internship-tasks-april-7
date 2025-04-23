import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Settings from '../pages/Settings';
import Billing from '../pages/Billing';
import Activity from '../pages/Activity';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';

const AppRoutes = () => {
  return (
    <Routes>
  <Route path="/login" element={<Login />} />

  {/* Protected routes */}
  <Route element={<RequireAuth />}>
    <Route path="/" element={<Home />} />
    <Route path="/console/projects" element={<Projects />} />
    <Route path="/console/projects/:projectId" element={<Projects />} />
    <Route path="/console/projects/:projectId/settings" element={<Settings />} />
    <Route path="/billing" element={<Billing />} />
    <Route path="/activity" element={<Activity />} />
  </Route>

  <Route path="*" element={<PageNotFound />} />
</Routes>
  );
};

export default AppRoutes;
